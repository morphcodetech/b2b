import React from "react";

const OrderHeader = () => (
  <div className="mb-6">
    <h1 className="text-2xl font-bold text-gray-800">All Orders</h1>
    <div className="flex items-center gap-2 mt-1">
      <div className="h-px w-10 bg-[#FA6C48]" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FA6C48"
        strokeWidth="1.8"
      >
        <path d="M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
      <div className="h-px w-10 bg-[#FA6C48]" />
    </div>
  </div>
);

export default OrderHeader;
