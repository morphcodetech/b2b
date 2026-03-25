import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CategoryCard from "../CategoryCard/CategoryCard";
import { categories } from "../../data/categoriesData";

const CategoryScrollSection = () => {
  const scrollRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollSpeed = 1.2;
  const loopedCategories = [...categories, ...categories];

  useEffect(() => {
    const node = scrollRef.current;

    if (!node) {
      return undefined;
    }

    let frameId;

    const tick = () => {
      if (!isPaused && node) {
        node.scrollLeft += autoScrollSpeed;

        // Reset at halfway point for a seamless infinite loop.
        if (node.scrollLeft >= node.scrollWidth / 2) {
          node.scrollLeft = 0;
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isPaused]);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-10 pb-7 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5">
        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:bg-[#FA6C48] hover:text-white hover:border-[#FA6C48] transition-all duration-200 -translate-x-2"
          >
            <FaChevronLeft size={12} />
          </button>

          {/* Scrollable Cards Track */}
          <div
            ref={scrollRef}
            className="flex gap-1 overflow-x-auto scroll-smooth mx-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {loopedCategories.map((cat, index) => (
              <CategoryCard
                key={`${cat.id}-${index}`}
                category={cat}
                isActive={activeId === cat.id}
                onClick={(c) => setActiveId(c.id)}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 z-10 w-8 h-8 rounded-full bg-[#1A9CB0] border border-[#1A9CB0] shadow-sm flex items-center justify-center text-white hover:bg-[#FA6C48] hover:border-[#FA6C48] transition-all duration-200 translate-x-2"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryScrollSection;