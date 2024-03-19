import "./index.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/dashboard" element={<DashboardPage />}></Route>
      <Route
        path="/blog/:easy-steps-to-push-your-project-to-gitHub-with-git:guide-for-developers"
        element={<BlogPage />}
      ></Route>
    </Routes>
  );
}

export default App;
