import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing"; // Import the new landing page
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import SimpleLayout from "./layouts/SimpleLayout";

function App() {
  return (
    <Routes>
      {/* 1. The NEW Landing Page at the root */}
      <Route path="/" element={<Landing />} />

      {/* 2. Pages WITH Navbar */}
      <Route element={<MainLayout m/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* 3. Page WITHOUT Navbar */}
      <Route element={<SimpleLayout />}>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;