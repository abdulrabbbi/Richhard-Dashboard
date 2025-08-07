import React, { useState } from "react";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

const stats = [
  {
    title: "Views",
    value: "721K",
    change: 11.01,
    bg: "bg-[#e3f5ff]",
  },
  {
    title: "Visits",
    value: "367K",
    change: -0.03,
    bg: "bg-[#e5ecf6]",
  },
  {
    title: "New Users",
    value: "1,156",
    change: 15.03,
    bg: "bg-[#e3f5ff]",
  },
  {
    title: "Active Users",
    value: "239K",
    change: 6.08,
    bg: "bg-[#e5ecf6]",
  },
];

const StatCard = ({ title, value, change, bg }) => {
  const isPositive = change >= 0;
  const changeColor = isPositive ? "text-green-600" : "text-red-500";
  const ArrowIcon = isPositive ? FiArrowUpRight : FiArrowDownRight;

  return (
    <div
      className={`rounded-xl p-4 sm:p-5 md:p-6 ${bg}
      w-full sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(25%-0.75rem)]`}
    >
      <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-1">{title}</p>
      <div className={`flex items-center justify-between ${changeColor}`}>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">{value}</p>
        <span className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium">
          {isPositive ? `+${change}%` : `${change}%`}
          <ArrowIcon size={14} />
        </span>
      </div>
    </div>
  );
};


const StatsOverview = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [isOpen, setIsOpen] = useState(false);
  const filters = ["Today", "This Week", "This Month", "This Year"];

  return (
    <div className="p-2 mx-2">
      {/* Dropdown */}
      <div className="relative inline-block mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm text-gray-600 font-medium"
        >
          {selectedFilter}
          <IoChevronDown size={16} />
        </button>

        {isOpen && (
          <ul className="absolute mt-2 w-32 bg-white shadow-lg rounded-md text-sm text-gray-700 z-10">
            {filters.map((filter) => (
              <li
                key={filter}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  filter === selectedFilter ? "font-semibold text-black" : ""
                }`}
                onClick={() => {
                  setSelectedFilter(filter);
                  setIsOpen(false);
                }}
              >
                {filter}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cards */}
      <div className="flex  flex-wrap gap-4">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;
