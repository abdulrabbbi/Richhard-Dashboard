import {
  MdMenu,
  MdSearch,
  MdLightMode,
  MdNotifications,
  MdHistory,
} from "react-icons/md";
import React, { useState } from "react";

const Header = ({ onMenuClick, onNotificationClick }) => {
  const [profile] = useState({
    name: "John Doe",
    avatar: "src\assets\Avatar.jpg"
  });

  return (
    <header className="h-14 bg-white flex items-center px-4">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
      >
        <MdMenu size={20} />
      </button>

      {/* Breadcrumbs */}
      <div className="ml-4 text-sm text-gray-600 flex items-center gap-1">
        <span className="text-gray-500">Dashboards</span>
        <span>/</span>
        <span className="font-medium text-gray-800">Default</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search Bar */}
      <div className="relative hidden md:flex items-center mr-4">
        <MdSearch className="absolute left-3 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-12 py-1.5 rounded-lg border border-gray-200 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <kbd className="absolute right-2 text-gray-400 text-xs pointer-events-none">⌘K</kbd>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-3 text-gray-700">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MdLightMode size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MdHistory size={18} />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-lg"
          onClick={onNotificationClick}
        >
          <MdNotifications size={18} />
        </button>
        <img
          src="src\assets\Avatar.jpg"
          alt={profile.name}
          className="h-7 w-7 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
