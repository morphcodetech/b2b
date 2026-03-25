import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CategoryCard from "../CategoryCard/CategoryCard";
import { categories } from "../../data/categoriesData";

const CategoryScrollSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollSpeed = 1; // Lower is smoother

  // Triple the data to ensure no "white gaps" during fast scrolls/resets
  const loopedCategories = [...categories, ...categories, ...categories];

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    let frameId;

    const tick = () => {
      if (!isPaused) {
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
  }, [isPaused]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    
    setIsPaused(true);

    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });

    // Resume auto-scroll after the smooth animation finishes
    setTimeout(() => setIsPaused(false), 600);
  };

  return (
    <section className="pt-10 pb-7 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border shadow-md flex items-center justify-center hover:bg-[#FA6C48] hover:text-white transition-colors"
        >
          <FaChevronLeft size={14} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden whitespace-nowrap py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {loopedCategories.map((cat, index) => (
            <div key={`${cat.id}-${index}`} className="flex-shrink-0">
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1A9CB0] text-white shadow-md flex items-center justify-center hover:bg-[#FA6C48] transition-colors"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default CategoryScrollSection;
