import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Same like this make a route path for your page */}

      </Routes>
    </Router>
  );
}

export default App;
