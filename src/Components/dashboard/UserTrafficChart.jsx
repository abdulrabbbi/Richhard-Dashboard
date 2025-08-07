import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const tabs = ["Total Users", "Total Projects", "Operating Status"];
const trafficSources = [
  "Google",
  "YouTube",
  "Instagram",
  "Pinterest",
  "Facebook",
  "Twitter",
  "Tumblr",
];

const data = [
  { month: "Jan", current: 12, previous: 10 },
  { month: "Feb", current: 18, previous: 14 },
  { month: "Mar", current: 9, previous: 20 },
  { month: "Apr", current: 15, previous: 17 },
  { month: "May", current: 19, previous: 15 },
  { month: "Jun", current: 22, previous: 21 },
  { month: "Jul", current: 25, previous: 27 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value.toLocaleString() + "M";
    return (
      <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
        {value}
      </div>
    );
  }
  return null;
};

const UserTrafficChart = () => {
  const [activeTab, setActiveTab] = useState("Total Users");
  const [activeTraffic, setActiveTraffic] = useState("Instagram");

  return (
    <div className="flex flex-col lg:flex-row mx-0 rounded-xl p-6 my-5 gap-6 ">
      {/* Chart Area */}
      <div className="flex-1 bg-[#f7f9fb] rounded-xl p-6 shadow-sm">
        {/* Tabs and Legend */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-3 mb-4">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab ? "text-black" : ""
                } focus:outline-none`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span>Current Week</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-300" />
              <span>Previous Week</span>
            </div>
          </div>
        </div>

        {/* Line Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              stroke="#9ca3af"
              fontSize={12}
            />
            <YAxis
              tickFormatter={(v) => `${v}M`}
              axisLine={false}
              tickLine={false}
              stroke="#9ca3af"
              fontSize={12}
              domain={[0, 30]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000"
              strokeWidth={2}
              dot={{ r: 4, fill: "#000" }}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#93c5fd"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4, fill: "#93c5fd" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Traffic Sidebar */}
      <div className="w-full md:w-52 pl-8 bg-[#f7f9fb] rounded-xl p-6 shadow-sm border-l border-gray-100">
  <h4 className="text-sm font-semibold mb-4 text-black">
    Traffic by Website
  </h4>
  <ul className="space-y-3 text-sm text-gray-500">
    {trafficSources.map((source) => (
      <li
        key={source}
        className={`flex justify-between items-center cursor-pointer ${
          activeTraffic === source ? "text-black font-medium" : ""
        }`}
        onClick={() => setActiveTraffic(source)}
      >
        <span>{source}</span>
        <div
          className={`h-1.5 rounded-full transition-all duration-200 ${
            activeTraffic === source ? "w-8 bg-black" : "w-4 bg-gray-300"
          }`}
        />
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default UserTrafficChart;
