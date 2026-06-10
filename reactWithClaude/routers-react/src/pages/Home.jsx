import { useContext } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../context/ThemeContext";
function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ color: theme === "light" ? "black" : "white",height: "70vh", backgroundColor: theme === "dark" ? "#111" : "#f5f5f5" }}>
      <Navbar />
      <h2>Welcome to HomePage</h2>
    </div>
  );
}

export default Home;
