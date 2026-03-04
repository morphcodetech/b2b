import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import salesData from "./SalesData";

const SalesPieChart = () => (
  <ResponsiveContainer width={160} height={160}>
    <PieChart>
      <Pie
        data={salesData}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={75}
        dataKey="value"
        strokeWidth={2}
        stroke="#fff"
      >
        {salesData.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{ fontSize: 12, borderRadius: 8 }}
        formatter={(v, n) => [`${v}%`, n]}
      />
    </PieChart>
  </ResponsiveContainer>
);

export default SalesPieChart;
