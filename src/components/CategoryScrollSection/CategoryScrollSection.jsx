import React, { useRef, useState } from "react";
import { categories } from "../../data/categoriesData";
import useAutoScroll from "./useAutoScroll";
import ScrollArrowButton from "./ScrollArrowButton";
import CategoryScrollTrack from "./CategoryScrollTrack";

const CategoryScrollSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const redirectUrl = "https://angro-product.vercel.app/";

  const loopedCategories = [...categories, ...categories, ...categories];

  useAutoScroll(scrollRef, isPaused, 1);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    setIsPaused(true);
    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
    setTimeout(() => setIsPaused(false), 600);
  };

  const handleCategoryClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <section className="pt-10 pb-7 bg-white overflow-hidden">
      <div className="max-w-325 mx-auto px-4 lg:px-5 relative">
        <div className="relative flex items-center">
          <ScrollArrowButton direction="left" onClick={() => scroll("left")} />
          <CategoryScrollTrack
            scrollRef={scrollRef}
            loopedCategories={loopedCategories}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onCategoryClick={handleCategoryClick}
          />
          <ScrollArrowButton
            direction="right"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryScrollSection;
