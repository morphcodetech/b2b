import React from "react";
import RevenueChartHeader from "./RevenueChartHeader";
import RevenueAreaChart from "./RevenueAreaChart";

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
      <RevenueChartHeader />
      <RevenueAreaChart />
    </div>
  );
};

export default RevenueChart;
