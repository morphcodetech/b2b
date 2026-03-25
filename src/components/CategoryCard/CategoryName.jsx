import React from "react";

const CategoryName = ({ name, isActive }) => (
  <p
    className={`text-[12px] font-semibold text-center leading-tight transition-colors duration-200
      ${isActive ? "text-[#FA6C48]" : "text-gray-800 group-hover:text-[#FA6C48]"}`}
  >
    {name}
  </p>
);

export default CategoryName;
