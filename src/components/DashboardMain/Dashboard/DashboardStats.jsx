import React from "react";
import StatsCard from "../StatsCard/StatsCard";
import { ProductIcon, SalesIcon, OrderIcon } from "../Dashboard/DashboardIcons";

const DashboardStats = () => (
  <div className="flex flex-col md:flex-row gap-4">
    <StatsCard icon={<ProductIcon />} label="Total Products" value="25" />
    <StatsCard icon={<SalesIcon />} label="Total Sales" value="12550" />
    <StatsCard icon={<OrderIcon />} label="Order Pending" value="36" />
  </div>
);

export default DashboardStats;
