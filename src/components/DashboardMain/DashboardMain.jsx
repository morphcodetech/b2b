import React from "react";
import StatsCard from "./StatsCard";
import RevenueChart from "./RevenueChart/RevenueChart";
import SalesChart from "./SalesChart";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import RecentOrders from "./RecentOrders/RecentOrders";

// Icons
const ProductIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <circle cx="8" cy="17" r="2" />
    <path d="M8 10h8M8 7h5" />
  </svg>
);

const SalesIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const OrderIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

const DashboardMain = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
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
          Hello,{" "}
          <span className="font-semibold text-gray-800">Vicki E. Pope</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          From your My Account Dashboard you have the ability to view a snapshot
          of your recent account activity and update your account information.
          Select a link below to view or edit information.
        </p>
      </div>

      {/* Stats Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <StatsCard icon={<ProductIcon />} label="Total Products" value="25" />
        <StatsCard icon={<SalesIcon />} label="Total Sales" value="12550" />
        <StatsCard icon={<OrderIcon />} label="Order Pending" value="36" />
      </div>

      {/* Charts Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <RevenueChart />
        <SalesChart />
      </div>

      {/* Tables Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        <TrendingProducts />
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardMain;
