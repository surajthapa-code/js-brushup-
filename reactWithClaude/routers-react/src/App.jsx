import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
