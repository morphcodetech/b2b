import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryScrollTrack = ({
  scrollRef,
  loopedCategories,
  onMouseEnter,
  onMouseLeave,
  onCategoryClick,
}) => (
  <div
    ref={scrollRef}
    style={{
      maskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    }}
    className="flex gap-4 overflow-x-hidden whitespace-nowrap py-4 mx-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {loopedCategories.map((cat, index) => (
      <div key={`${cat.id}-${index}`} className="shrink-0">
        <CategoryCard category={cat} onClick={onCategoryClick} />
      </div>
    ))}
  </div>
);

export default CategoryScrollTrack;
