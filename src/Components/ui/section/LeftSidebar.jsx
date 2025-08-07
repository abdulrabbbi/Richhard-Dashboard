import {
  MdDashboard,
  MdPeople,
  MdPayment,
  MdSettings,
  MdLogout,
  MdPerson,
  MdOutlineAdUnits,
} from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import React from "react"

const menuItems = [
  { icon: MdDashboard, label: "Dashboard", path: "/" },
  { icon: MdPeople, label: "Users", path: "/users" },
  { icon: MdOutlineAdUnits, label: "Ads Request", path: "/ads-Request" },
  { icon: MdOutlineAdUnits, label: "Ads Management", path: "/ads" },
  { icon: MdPayment, label: "Payments", path: "/payments" },
];

const footerItems = [
  { icon: MdSettings, label: "Settings", path: "/settings" },
  { icon: MdLogout, label: "Logout", path: "/auth/login" },
];

const LeftSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed lg:static inset-y-0 left-0 w-60 bg-white transform z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition-transform duration-200 ease-in-out
          flex flex-col
        `}
      >
        {/* Logo section */}
        <div className="h-16 flex items-center px-6 justify-between">
          <div className="text-lg font-semibold tracking-tight flex gap-4"> 
            <img src="src\assets\Logo.png" className="h-9"/> play
          </div>
          <button className="lg:hidden" onClick={() => setIsOpen(false)}>
            <IoClose size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 py-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium
                ${
                  isActive
                    ? "bg-[#F4F2F7] text-black"
                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 pb-4 space-y-1">
          {footerItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={item.label === "Logout" ? handleLogout : undefined}
              className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-black"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
