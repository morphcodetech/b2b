import React from "react";

const CategoryImage = ({ category, isActive }) => (
  <div
    className={`w-27 h-27 rounded-full flex items-center justify-center overflow-hidden transition-all duration-200
      ${
        isActive
          ? "ring-2 ring-[#FA6C48] ring-offset-2"
          : "group-hover:ring-2 group-hover:ring-[#FA6C48] group-hover:ring-offset-2"
      }`}
    style={{ backgroundColor: category.bg }}
  >
    <img
      src={category.image}
      alt={category.name}
      className="w-21.5 h-21.5 object-contain drop-shadow-sm"
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/90";
      }}
    />
  </div>
);

export default CategoryImage;
