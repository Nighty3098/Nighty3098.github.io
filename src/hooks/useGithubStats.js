import { useState, useEffect } from "react";

const useGithubStats = (repoUrl) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repoUrl) {
      setLoading(false);
      return;
    }

    const matches = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!matches) {
      setError(new Error("Undefined format for URL GitHub"));
    } else {
      setError(null);
    }

    setLoading(false);
  }, [repoUrl]);

  return { loading, error };
};

export default useGithubStats;
