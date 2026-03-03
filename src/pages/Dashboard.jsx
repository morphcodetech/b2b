import React from "react";
import Heading from "../components/UserDashboardHeading/Heading";
import ProfileCard from "../components/UserDashboardProfileCard/ProfileCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Top Heading - full width */}
      <Heading />

      {/* Body: sidebar + main content */}
      <div className="flex px-6 md:px-12 lg:px-24 xl:px-32 py-10 gap-6">
        {/* Left Sidebar - Profile Card */}
        <aside className="w-72 shrink-0">
          <ProfileCard />
        </aside>

        {/* Right Main Content */}
        <main className="flex-1">{/* Your dashboard content goes here */}</main>
      </div>
    </div>
  );
};

export default Dashboard;
