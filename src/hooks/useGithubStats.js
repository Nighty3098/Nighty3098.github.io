import { useState, useEffect } from "react";

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

const useGithubStats = (repoUrl) => {
  const [stars, setStars] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      if (!repoUrl) return;

      const matches = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (!matches) return;

      const [, owner, repo] = matches;
      const cacheKey = `github-stars-${owner}-${repo}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        const { stars, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setStars(stars);
          setLoading(false);
          return;
        }
      }

      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        const data = await response.json();

        if (data.stargazers_count !== undefined) {
          const newData = {
            stars: data.stargazers_count,
            timestamp: Date.now(),
          };
          localStorage.setItem(cacheKey, JSON.stringify(newData));
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [repoUrl]);

  return { stars, loading };
};

export default useGithubStats;
