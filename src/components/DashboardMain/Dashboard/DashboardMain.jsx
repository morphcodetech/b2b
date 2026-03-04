import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import DashboardCharts from "./DashboardCharts";
import DashboardTables from "./DashboardTables";

const DashboardMain = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader />
      <DashboardStats />
      <DashboardCharts />
      <DashboardTables />
    </div>
  );
};

export default DashboardMain;
