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
        path="/blog/easy-steps-to-push-your-project-to-gitHub-with-git:guide-for-developers"
        element={<BlogPage content={"blog1"} />}
      ></Route>
      <Route
        path="/blog/getting-to-know-30+-useful-command-terminal-commands-for-beginners"
        element={<BlogPage content={"blog2"} />}
      ></Route>
      <Route
        path="/blog/code-model-bidirectional-gated-recurrent-unit-(BiGRU)-for-wind-speed-prediction"
        element={<BlogPage content={"blog3"} />}
      ></Route>
    </Routes>
  );
}

export default App;
