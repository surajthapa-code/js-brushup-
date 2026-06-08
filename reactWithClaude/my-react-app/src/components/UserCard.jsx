function UserCard({ name, role, isOnline }) {
  return (
    <>
      <h3>Name: {name}</h3>
      <h3>
        Role: {role || "No role assigned"}
        {role}
      </h3>
      <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </>
  );
}

export default UserCard;
