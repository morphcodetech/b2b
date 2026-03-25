import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ShopNowButton = ({ redirectUrl }) => (
  <button
    onClick={() => {
      window.location.href = redirectUrl;
    }}
    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1f9bb5] text-white text-[13px] font-semibold px-5 py-2.5 hover:bg-[#18859c] transition-colors duration-200"
  >
    Shop Now <FaArrowRight size={11} />
  </button>
);

export default ShopNowButton;
