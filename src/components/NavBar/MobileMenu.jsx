import React from "react";
import { NavLink } from "react-router-dom";
import teamMembers from "./TeamMembers";

const MobileMenu = ({ onClose }) => (
  <div className="sm:hidden px-4 py-3 flex flex-col gap-1 bg-[#FA6C48] border-t border-white/15">
    {teamMembers.map((member) => (
      <NavLink
        key={member.path}
        to={member.path}
        onClick={onClose}
        className={({ isActive }) =>
          `px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors ${
            isActive
              ? "bg-white/15 underline underline-offset-4"
              : "bg-transparent hover:bg-white/15"
          }`
        }
      >
        {member.name}
      </NavLink>
    ))}
  </div>
);

export default MobileMenu;
