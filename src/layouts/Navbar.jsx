import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaUserCircle, FaFacebookF, FaTwitter, FaLinkedinIn, 
  FaPinterestP, FaYoutube, FaVimeoV, FaInstagram, FaPhoneAlt 
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent text-white"}`}>
      
      {/* TOP BAR: Animated height/opacity for a smoother vanish */}
      <div className={`hidden lg:flex justify-between px-12 overflow-hidden transition-all duration-500 border-b border-white/10 uppercase tracking-widest text-[11px] ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-20 py-2"}`}>
          <div className="flex gap-4 items-center">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaPinterestP className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaYoutube className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaVimeoV className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
          <div className="flex gap-6 opacity-90 items-center">
            <span className="cursor-pointer hover:text-blue-400">❤ Favorites</span>
            <span className="cursor-pointer hover:text-blue-400">✉ contact@mail.com</span>
            <span className="font-bold flex items-center gap-1 cursor-default">
               <FaPhoneAlt className="text-[9px]" /> +1 408 167 1234
            </span>
          </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className={`flex justify-between items-center px-6 md:px-12 max-w-[1600px] mx-auto transition-all duration-300 ${isScrolled ? "py-3 text-gray-800" : "py-6 text-white"}`}>
        
        {/* Logo Section */}
        <div className="text-2xl font-black tracking-tighter flex items-center cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 mr-2 flex items-center justify-center">
            <span className="text-white text-sm">WP</span>
          </div>
          RESIDENCE
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8 text-[13px] font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="#" className="hover:text-blue-500 transition-colors">Demos</Link>
          <Link to="#" className="hover:text-blue-500 transition-colors">Lists</Link>
          <Link to="#" className="hover:text-blue-500 transition-colors">Property</Link>
          <Link to="#" className="hover:text-blue-500 transition-colors">Pages</Link>
          <Link to="#" className="hover:text-blue-500 transition-colors">Search</Link>
        </div>

        {/* Right Action Side */}
        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-2 text-sm font-bold italic">
             <FaPhoneAlt className="text-blue-500 text-xs" />
             <span className={isScrolled ? "text-gray-700" : "text-white"}>800-555-6789</span>
           </div>
           
           <div className="relative group cursor-pointer">
             <FaUserCircle className={`text-2xl transition-colors ${isScrolled ? "text-gray-700" : "text-white"} group-hover:text-blue-500`} />
           </div>

           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-[12px] font-bold uppercase transition-all shadow-lg shadow-blue-500/20 active:scale-95">
             Add Listing
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;