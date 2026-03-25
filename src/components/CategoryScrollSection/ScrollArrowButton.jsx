import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ScrollArrowButton = ({ direction, onClick }) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className={`absolute ${isLeft ? "left-0 -translate-x-2" : "right-0 translate-x-2"} z-20 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all duration-200
        ${
          isLeft
            ? "bg-white border border-gray-200 text-gray-500 hover:bg-[#FA6C48] hover:text-white hover:border-[#FA6C48]"
            : "bg-[#1A9CB0] border border-[#1A9CB0] text-white hover:bg-[#FA6C48] hover:border-[#FA6C48]"
        }`}
    >
      {isLeft ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
    </button>
  );
};

export default ScrollArrowButton;
