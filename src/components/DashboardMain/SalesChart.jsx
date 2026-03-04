import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Recent Order", value: 20, color: "#e5e7eb" },
  { name: "Pending Payments", value: 25, color: "#d1d5db" },
  { name: "Received Payments", value: 35, color: "#0fa488" },
  { name: "Complete Order", value: 20, color: "#a7f3d0" },
];

const SalesChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 w-80 shrink-0">
      <h3 className="text-base font-bold text-gray-800 mb-4">Overall Sales</h3>
      <div className="flex items-center gap-4">
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              dataKey="value"
              strokeWidth={2}
              stroke="#fff"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ fontSize: 12, borderRadius: 8 }}
              formatter={(v, n) => [`${v}%`, n]}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex flex-col gap-2">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-gray-500">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
