import React from "react";

const DashboardHeader = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-800">My Dashboard</h1>
    <div className="flex items-center gap-2 mt-1 mb-3">
      <div className="h-px w-10 bg-[#0fa488]" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0fa488"
        strokeWidth="1.8"
      >
        <path d="M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
      <div className="h-px w-10 bg-[#0fa488]" />
    </div>
    <p className="text-sm text-gray-600">
      Hello, <span className="font-semibold text-gray-800">Vicki E. Pope</span>
    </p>
    <p className="text-sm text-gray-500 mt-1">
      From your My Account Dashboard you have the ability to view a snapshot of
      your recent account activity and update your account information. Select a
      link below to view or edit information.
    </p>
  </div>
);

export default DashboardHeader;
