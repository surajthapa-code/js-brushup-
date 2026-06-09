import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserDetail() {
  const { id } = useParams();
  const { data } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {},
  );
  return (
    <>
      <h2>Name: {data.name}</h2>
      <p>email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Company: {data.company?.name}</p>
      <Link to="/users"> get back</Link>
    </>
  );
}

export default UserDetail;
