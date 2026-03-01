import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Short Nav */}
      <Navbar />

      {/* Main Body Section */}
      <main className="container mx-auto px-4 pb-12">
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;
