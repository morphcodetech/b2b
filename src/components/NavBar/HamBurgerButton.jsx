import React from "react";

const HamburgerButton = ({ menuOpen, onClick }) => (
  <button
    onClick={onClick}
    className="sm:hidden p-2 rounded-lg text-white hover:bg-white/15 transition-colors"
    aria-label="Toggle menu"
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {menuOpen ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  </button>
);

export default HamburgerButton;
