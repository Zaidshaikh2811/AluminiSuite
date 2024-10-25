import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
