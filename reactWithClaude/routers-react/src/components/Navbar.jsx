import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div style={{ backgroundColor: "pink", height: "60px" }}>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Navbar;
