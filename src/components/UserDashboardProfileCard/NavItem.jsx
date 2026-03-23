import React from "react";
import { NavLink } from "react-router-dom";

const baseClassName =
  "w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-150 border-l-4";

const NavItem = ({ icon, label, to, end = false, danger = false, onClick }) => {
  if (to) {
    return (
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) =>
          `${baseClassName} ${
            isActive
              ? "border-[#0fa488] bg-teal-50 text-[#0fa488]"
              : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          }`
        }
      >
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
      </NavLink>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClassName} ${
        danger
          ? "border-transparent text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-400"
          : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default NavItem;
