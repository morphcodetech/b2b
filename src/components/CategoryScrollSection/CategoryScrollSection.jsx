import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CategoryCard from "../CategoryCard/CategoryCard";
import { categories } from "../../data/categoriesData";

const CategoryScrollSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollSpeed = 1;
  const redirectUrl = "https://angro-product.vercel.app/";

  const loopedCategories = [...categories, ...categories, ...categories];

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    let frameId;

    const tick = () => {
      if (!isPaused && node) {
        node.scrollLeft += autoScrollSpeed;

        const singleSetWidth = node.scrollWidth / 3;

        if (node.scrollLeft >= singleSetWidth * 2) {
          node.scrollLeft -= singleSetWidth;
        }
      }
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isPaused, autoScrollSpeed]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    setIsPaused(true);

    scrollRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });

    // Resume auto-scroll after 600ms
    setTimeout(() => setIsPaused(false), 600);
  };

  const handleCategoryClick = () => {
    window.location.href = redirectUrl;
  };

  return (
    <section className="pt-10 pb-7 bg-white overflow-hidden">
      <div className="max-w-325 mx-auto px-4 lg:px-5 relative">
        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:bg-[#FA6C48] hover:text-white hover:border-[#FA6C48] transition-all duration-200 -translate-x-2"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
            className="flex gap-4 overflow-x-hidden whitespace-nowrap py-4 mx-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {loopedCategories.map((cat, index) => (
              <div key={`${cat.id}-${index}`} className="shrink-0">
                <CategoryCard category={cat} onClick={handleCategoryClick} />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-[#1A9CB0] border border-[#1A9CB0] shadow-md flex items-center justify-center text-white hover:bg-[#FA6C48] hover:border-[#FA6C48] transition-all duration-200 translate-x-2"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryScrollSection;
