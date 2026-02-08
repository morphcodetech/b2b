import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import MainLayout from "./layouts/MainLayout";

function App() { 
  return ( 
    <Routes> 
      <Route path="/" element={<MainLayout />}>
        {/* Home page with all the property sections */}
        <Route index element={<Home />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} /> 
      </Route>
    </Routes> 
  );
} 

export default App;