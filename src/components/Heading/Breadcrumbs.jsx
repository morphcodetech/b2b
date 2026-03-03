import React from "react";
import HomeIcon from "./Homeicon";
import ChevronIcon from "./Chevronicon";

const Breadcrumbs = ({ currentPage }) => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-1 sm:pb-0">
      <HomeIcon />
      <ChevronIcon />
      <span className="font-medium text-gray-800">{currentPage}</span>
    </nav>
  );
};

export default Breadcrumbs;
