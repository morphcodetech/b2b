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

const NavMenu = ({ activeItem, onSelect }) => {
  const items = [
    { label: "DashBoard", icon: <LayoutDashboard size={18} /> },
    { label: "Products", icon: <ShoppingBag size={18} /> },
    { label: "Order", icon: <ClipboardList size={18} /> },
    { label: "Profile", icon: <User size={18} /> },
    { label: "Setting", icon: <Settings size={18} /> },
  ];

  return (
    <nav className="flex flex-col py-2">
      {items.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          active={activeItem === item.label}
          onClick={() => onSelect(item.label)}
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
