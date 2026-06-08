import { useEffect } from "react";
import { useState } from "react";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataset = await res.json();
        setData(dataset);
       
        setError(false);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, []);
  
  return (
    <>
      <p>{loading && "loading..."}</p>
      <p>{error && "something went wrong!!"}</p>

      <div>
        {data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default DataFetcher;
