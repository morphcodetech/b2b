import React from "react";
import { NavLink } from "react-router-dom";
import teamMembers from "./TeamMembers";

const DesktopNav = () => (
  <div className="hidden sm:flex items-center gap-1">
    {teamMembers.map((member) => (
      <NavLink
        key={member.path}
        to={member.path}
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 border ${
            isActive
              ? "bg-white/15 border-white/30 underline underline-offset-4"
              : "bg-transparent border-transparent hover:bg-white/15"
          }`
        }
      >
        {member.name}
      </NavLink>
    ))}
  </div>
);

export default DesktopNav;
