import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Users() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users", []);
  return (
    <>
      <Link to="/">Get back nigga</Link>

      <div>
        {data.map((user) => {
          return (
            <div key={user.id}>
              <Link to={`/user/${user.id}/`}>{user.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;
