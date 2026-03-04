import React from "react";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import RecentOrders from "../RecentOrders/RecentOrders";

const DashboardTables = () => (
  <div className="flex flex-col lg:flex-row gap-4">
    <TrendingProducts />
    <RecentOrders />
  </div>
);

export default DashboardTables;
