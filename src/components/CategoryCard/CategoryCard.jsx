import React from "react";
import CategoryImage from "./CategoryImage";
import CategoryName from "./CategoryName";
import CategoryCount from "./CategoryCount";

const CategoryCard = ({ category, isActive, onClick }) => {
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer group min-w-33 px-3 py-3"
      onClick={() => onClick && onClick(category)}
    >
      <CategoryImage category={category} isActive={isActive} />
      <CategoryName name={category.name} isActive={isActive} />
      <CategoryCount count={category.count} />
    </div>
  );
};

export default CategoryCard;
