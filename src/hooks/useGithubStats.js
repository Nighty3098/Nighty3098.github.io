import { useState, useEffect } from "react";

const CACHE_DURATION = 1000 * 60 * 60;

const useGithubStats = (repoUrl) => {
  const [stars, setStars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      if (!repoUrl) {
        setLoading(false);
        return;
      }

      const matches = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (!matches) {
        setError(new Error("Undefined format for URL GitHub"));
        setLoading(false);
        return;
      }

      const [, owner, repo] = matches;
      const cacheKey = `github-stars-${owner}-${repo}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        try {
          const { stars, timestamp } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setStars(stars);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.warn("Cache error:", e);
        }
      }

      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );

        if (!response.ok) {
          throw new Error(`GitHub API return error: ${response.status}`);
        }

        const data = await response.json();

        if (data.stargazers_count !== undefined) {
          const newData = {
            stars: data.stargazers_count,
            timestamp: Date.now(),
          };
          localStorage.setItem(cacheKey, JSON.stringify(newData));
          setStars(data.stargazers_count);
          setError(null);
        } else {
          throw new Error("GIT API STARS NOT FOUND");
        }
      } catch (error) {
        console.error("Error while getting stars from GitHub:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [repoUrl]);

  return { stars, loading, error };
};

export default useGithubStats;
