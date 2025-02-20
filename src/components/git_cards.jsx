import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InfoWidget = ({ item, index }) => {
  const controls = useAnimation();
  const [randomRotate] = useState(() => Math.random() * 30 - 20);

  return (
    <motion.div
      className="info_widget"
      initial={{ opacity: 0, y: 50, rotate: randomRotate }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.05,
            ease: "easeOut",
            rotate: randomRotate,
          },
        });
      }}
      whileTap={{ scale: 0.95 }}
      onViewportLeave={() => {
        controls.start({
          opacity: 0,
        });
      }}
    >
      <h1>{item.subtitle}</h1>
      <h2>{item.title}</h2>
    </motion.div>
  );
};

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
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const statsData = [
          { title: "Public Projects", subtitle: data.public_repos },
          { title: "Followers", subtitle: data.followers },
          { title: "Following", subtitle: data.following },
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
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="widget_blocks">
      {stats.map((item, index) => (
        <InfoWidget key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default GitHubStats;
