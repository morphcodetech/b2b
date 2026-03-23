import React from "react";
import { useLocation } from "react-router-dom";
import Heading from "../components/UserDashboardHeading/Heading";
import ProfileCard from "../components/UserDashboardProfileCard/ProfileCard";
import DashboardMain from "../components/DashboardMain/Dashboard/DashboardMain";
import Profile from "../components/Profile/Profile";
import Products from "../components/Products/Products";
import Order from "../components/Order/Order";
import Setting from "../components/SettingsPage/Setting";

const Dashboard = () => {
  const { pathname } = useLocation();
  const showProfileContent =
    pathname === "/dashboard/profile" || pathname === "/profile";
  const showProductsContent =
    pathname === "/dashboard/products" || pathname === "/products";

  const showOrderContent =
    pathname === "/dashboard/order" || pathname === "/order";

  const showSettingsContent =
    pathname === "/dashboard/settings" || pathname === "/settings";

  const mainContent = showProfileContent ? (
    <Profile />
  ) : showProductsContent ? (
    <Products />
  ) : showOrderContent ? (
    <Order />
  ) : showSettingsContent ? (
    <Setting />
  ) : (
    <DashboardMain />
  );

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
          {mainContent}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
