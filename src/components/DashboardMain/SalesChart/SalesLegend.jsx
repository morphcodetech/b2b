import React from "react";
import salesData from "./SalesData";

const SalesLegend = () => (
  <div className="flex flex-col gap-2">
    {salesData.map((item, i) => (
      <div key={i} className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full shrink-0"
          style={{ backgroundColor: item.color }}
        />
        <span className="text-xs text-gray-500">{item.name}</span>
      </div>
    ))}
  </div>
);

export default SalesLegend;
