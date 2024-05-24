import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Morpion from "./components/Morpion";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/morpion" element={<Morpion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
