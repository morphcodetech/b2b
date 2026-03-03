import React from "react";

const NavItem = ({ icon, label, active = false, onClick, danger = false }) => (
  <button
    onClick={onClick}
    className={
      "w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-150 border-l-4 " +
      (active
        ? "border-teal-500 bg-teal-50 text-teal-600"
        : danger
          ? "border-transparent text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-400"
          : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800")
    }
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </button>
);

export default NavItem;
