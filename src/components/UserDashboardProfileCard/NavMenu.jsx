import React from "react";
import NavItem from "./NavItem";
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const NavMenu = () => {
  const items = [
    {
      label: "DashBoard",
      icon: <LayoutDashboard size={18} />,
      to: "/dashboard",
      end: true,
    },
    {
      label: "Products",
      icon: <ShoppingBag size={18} />,
      to: "/dashboard/products",
    },
    { label: "Order", icon: <ClipboardList size={18} />, to: "/dashboard/order", end: true },
    { label: "Profile", icon: <User size={18} />, to: "/dashboard/profile" },
    { label: "Settings", icon: <Settings size={18} />, to: "/dashboard/settings", end: true },
  ];

  return (
    <nav className="flex flex-col py-2">
      {items.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          to={item.to}
          end={item.end}
        />
      ))}
      <div className="my-2 mx-5 border-t border-gray-100" />
      <NavItem
        icon={<LogOut size={18} />}
        label="Log Out"
        danger
        onClick={() => {}}
      />
    </nav>
  );
};

export default NavMenu;
