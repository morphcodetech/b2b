import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartPage from "./pages/Cart"; 
import MainLayout from "./layouts/MainLayout";
import SimpleLayout from "./layouts/SimpleLayout";

function App() {
  return (
    <Routes>
      {/* 1. Landing Page (No Navbar) */}
      <Route path="/" element={<Landing />} />

      {/* 2. Pages WITH Navbar (MainLayout) */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Route>

      {/* 3. Pages WITHOUT Navbar (SimpleLayout) */}
      <Route element={<SimpleLayout />}>
        <Route path="/contact" element={<Contact />} />
        {/* ADD /cart HERE */}
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;