import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import SimpleLayout from "./layouts/SimpleLayout";

function App() {
  return (
    <Routes>

      {/* Default route   Contact first */}
      <Route path="/" element={<Navigate to="/contact" />} />

      {/* Pages WITH Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Page WITHOUT Navbar */}
      <Route element={<SimpleLayout />}>
        <Route path="/contact" element={<Contact />} />
      </Route>

    </Routes>
  );
}

export default App;
