import React, { useState } from "react";
import BrandName from "./BrandName";
import DesktopNav from "./DesktopNav";
import HamburgerButton from "./HamBurgerButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FA6C48] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BrandName />
          <DesktopNav />
          <HamburgerButton
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
