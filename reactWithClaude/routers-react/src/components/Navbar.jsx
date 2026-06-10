import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "pink" : "olive",
        height: "60px",
      }}
    >
      <Link to="/users">Users</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Navbar;
