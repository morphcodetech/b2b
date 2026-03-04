import React from "react";
import SalesPieChart from "./SalesPieChart";
import SalesLegend from "./SalesLegend";

const SalesChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 w-full sm:w-80 shrink-0">
      <h3 className="text-base font-bold text-gray-800 mb-4">Overall Sales</h3>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <SalesPieChart />
        <SalesLegend />
      </div>
    </div>
  );
};

export default SalesChart;
