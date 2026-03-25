import React from "react";

const CategoryCard = ({ category, isActive, onClick }) => {
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer group min-w-[132px] px-3 py-3"
      onClick={() => onClick && onClick(category)}
    >
      {/* Circle with food image */}
      <div
        className={`w-[108px] h-[108px] rounded-full flex items-center justify-center overflow-hidden transition-all duration-200
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
          className="w-[86px] h-[86px] object-contain drop-shadow-sm"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/90";
          }}
        />
      </div>

      {/* Category Name */}
      <p
        className={`text-[12px] font-semibold text-center leading-tight transition-colors duration-200
          ${isActive ? "text-[#FA6C48]" : "text-gray-800 group-hover:text-[#FA6C48]"}`}
      >
        {category.name}
      </p>

      {/* Product Count */}
      <span className="text-[10px] text-gray-400 text-center -mt-1">
        {category.count}
      </span>
    </div>
  );
};

export default CategoryCard;
