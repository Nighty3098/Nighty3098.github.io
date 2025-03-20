import React, { useEffect, useState } from "react";
import InfoWidget from "./info_widget";

const GitHubStats = ({ username }) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `github_stats_${username}`;
      const cachedData = localStorage.getItem(cacheKey);
      const cacheTime = localStorage.getItem(`${cacheKey}_time`);

      const now = new Date().getTime();
      const oneHour = 60 * 60 * 1000;

      if (cachedData && cacheTime && now - cacheTime < oneHour) {
        setStats(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const query = `
          query {
            user(login: "${username}") {
              followers
              repositories(first: 100) {
                totalCount
                nodes {
                  stargazerCount
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        history {
                          totalCount
                        }
                      }
                    }
                  }
                  pullRequests {
                    totalCount
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer YOUR_GITHUB_TOKEN`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        const userData = data.data.user;
        const reposData = data.data.user.repositories.nodes;

        let totalCommits = 0;
        let totalPullRequests = 0;
        let totalStars = 0;

        totalCommits = reposData.reduce(
          (acc, repo) => acc + repo.history.totalCount,
          0,
        );
        totalPullRequests = reposData.reduce(
          (acc, repo) => acc + repo.pullRequests.totalCount,
          0,
        );
        totalStars = reposData.reduce(
          (acc, repo) => acc + repo.stargazerCount,
          0,
        );

        const statsData = [
          { subtitle: "Total Stars", title: totalStars },
          { subtitle: "Followers on git", title: userData.followers },
          { subtitle: "Total Commits", title: totalCommits },
          { subtitle: "Total Pull Requests", title: totalPullRequests },
        ];

        setStats(statsData);
        localStorage.setItem(cacheKey, JSON.stringify(statsData));
        localStorage.setItem(`${cacheKey}_time`, now);
      } catch (error) {
        console.error("GitHub error:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div>Loading</div>;
  if (error) return <div></div>;

  return (
    <div className="widget_blocks">
      {stats.map((item, index) => (
        <InfoWidget key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default GitHubStats;
