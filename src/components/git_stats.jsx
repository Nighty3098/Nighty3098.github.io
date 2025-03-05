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
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (!userResponse.ok) throw new Error("Network response was not ok");
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`,
        );
        if (!reposResponse.ok) throw new Error("Network response was not ok");
        const reposData = await reposResponse.json();

        let totalCommits = 0;
        let totalPullRequests = 0;
        let totalStars = 0;

        const commitPromises = reposData.map((repo) =>
          fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`)
            .then((response) => (response.ok ? response.json() : []))
            .then((commitsData) => commitsData.length),
        );

        const pullRequestPromises = reposData.map((repo) =>
          fetch(
            `https://api.github.com/repos/${username}/${repo.name}/pulls?state=all`,
          )
            .then((response) => (response.ok ? response.json() : []))
            .then((pullsData) => pullsData.length),
        );

        const commitsResults = await Promise.all(commitPromises);
        const pullsResults = await Promise.all(pullRequestPromises);

        totalCommits = commitsResults.reduce((acc, count) => acc + count, 0);
        totalPullRequests = pullsResults.reduce((acc, count) => acc + count, 0);
        totalStars = reposData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
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
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div>Loading...</div>;
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
