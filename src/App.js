import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}