import { Outlet } from "react-router-dom";
const MainLayout = () => {
return (
<div>
<nav className="p-4 bg-gray-800 text-white">Navbar</nav>
<Outlet />
</div>
);
};
export default MainLayout;
