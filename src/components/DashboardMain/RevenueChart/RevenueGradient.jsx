import React from "react";

const RevenueGradient = () => (
  <defs>
    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FA6C48" stopOpacity={0.2} />
      <stop offset="95%" stopColor="#FA6C48" stopOpacity={0} />
    </linearGradient>
  </defs>
);

export default RevenueGradient;
