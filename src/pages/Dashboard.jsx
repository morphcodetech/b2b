import React from "react";
import { useLocation } from "react-router-dom";
import Heading from "../components/UserDashboardHeading/Heading";
import ProfileCard from "../components/UserDashboardProfileCard/ProfileCard";
import DashboardMain from "../components/DashboardMain/Dashboard/DashboardMain";
import Profile from "../components/Profile/Profile";

const Dashboard = () => {
  const { pathname } = useLocation();
  const showProfileContent =
    pathname === "/dashboard/profile" || pathname === "/profile";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* top heading */}
      <Heading />

      {/* sidebar + main content */}
      <div className="flex flex-col md:flex-row px-6 md:px-12 lg:px-24 xl:px-32 py-10 gap-6">
        {/* left profile card */}
        <aside className="w-full md:w-72 shrink-0 md:sticky md:top-40 self-start">
          <ProfileCard />
        </aside>

        {/* right content */}
        <main className="flex-1 bg-[#F5F5F5] rounded-xl p-6 mt-6 md:mt-0">
          {showProfileContent ? <Profile /> : <DashboardMain />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
