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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Dashboard />} />
        <Route path="/dashboard/order" element={<Dashboard />} />
        <Route path="/dashboard/settings" element={<Dashboard />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/order" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
