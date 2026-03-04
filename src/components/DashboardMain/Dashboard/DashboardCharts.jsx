import React from "react";
import RevenueChart from "../RevenueChart/RevenueChart";
import SalesChart from "../SalesChart/SalesChart";

const DashboardCharts = () => (
  <div className="flex flex-col md:flex-row gap-4">
    <RevenueChart />
    <SalesChart />
  </div>
);

export default DashboardCharts;
