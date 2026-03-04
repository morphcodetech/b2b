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

const data = [
  { month: "Apr '12", value: 29 },
  { month: "Jun '12", value: 30 },
  { month: "Aug '12", value: 31 },
  { month: "Oct '12", value: 30.5 },
  { month: "Dec '12", value: 33 },
  { month: "Feb '13", value: 38 },
  { month: "Mar '13", value: 41 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
      <h3 className="text-base font-bold text-gray-800 mb-1">Total Revenue</h3>
      <p className="text-xs text-gray-400 mb-4">Price Movements</p>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0fa488" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#0fa488" stopOpacity={0} />
            </linearGradient>
          </defs>
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
            stroke="#0fa488"
            strokeWidth={2}
            fill="url(#revenueGrad)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
