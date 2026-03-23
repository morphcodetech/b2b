import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import revenueData from "./RevenueData";
import RevenueGradient from "./RevenueGradient";

const RevenueAreaChart = () => (
  <ResponsiveContainer width="100%" height={220}>
    <AreaChart
      data={revenueData}
      margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
    >
      <RevenueGradient />
      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
      <XAxis
        dataKey="month"
        tick={{ fontSize: 11, fill: "#9ca3af" }}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        domain={[27, 42]}
        ticks={[27, 30, 33, 36, 39, 42]}
        tick={{ fontSize: 11, fill: "#9ca3af" }}
        axisLine={false}
        tickLine={false}
        tickFormatter={(v) => v.toFixed(2)}
      />
      <Tooltip
        contentStyle={{
          fontSize: 12,
          borderRadius: 8,
          border: "1px solid #e5e7eb",
        }}
        formatter={(v) => [`${v}`, "Revenue"]}
      />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#FA6C48"
        strokeWidth={2}
        fill="url(#revenueGrad)"
        dot={false}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default RevenueAreaChart;
