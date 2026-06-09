import useFetch from "../hooks/useFetch";
function PostList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>error </p>}
      <div>
        {!loading &&
          data.slice(0, 10).map((post) => {
            return (
              <div key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default PostList;
