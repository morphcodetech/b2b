import React from "react";
import Heading from "../components/UserDashboardHeading/Heading";
import ProfileCard from "../components/UserDashboardProfileCard/ProfileCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* top heading */}
      <Heading />

      {/* sidebar + main content */}
      <div className="flex px-6 md:px-12 lg:px-24 xl:px-32 py-10 gap-6">

        {/* left profile card */}
        <aside className="w-72 shrink-0">
          <ProfileCard />
        </aside>

        {/* right content */}
        <main className="flex-1"></main>
      </div>
    </div>
  );
};

export default Dashboard;
