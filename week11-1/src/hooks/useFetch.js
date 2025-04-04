import { useState, useEffect } from 'react';

export const useFetch = (url, interval = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    if (interval !== null) {
      const fetchInterval = setInterval(() => {
        fetchData();
      }, interval);

      return () => clearInterval(fetchInterval); // Cleanup on unmount
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, interval]);

  return { data, loading, error };
};
