import { useEffect, useState } from "react";

function useFetch(url, initialVal) {
  const [data, setData] = useState(initialVal);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function datawork() {
      try {
        const res = await fetch(url);
        const dateSet = await res.json();
        setData(dateSet);
        setError(false);
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    datawork();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
