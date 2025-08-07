import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import React from "react";

const deviceData = [
  { name: "Linux", value: 18, color: "#A5B4FC" },
  { name: "Mac", value: 22, color: "#A7F3D0" },
  { name: "iOS", value: 19, color: "#000000" },
  { name: "Windows", value: 25, color: "#BAE6FD" },
  { name: "Android", value: 10, color: "#93C5FD" },
  { name: "Other", value: 22, color: "#6EE7B7" },
];

const locationData = [
  { name: "United States", value: 38.6, color: "#000000" },
  { name: "Canada", value: 22.5, color: "#A7F3D0" },
  { name: "Mexico", value: 30.8, color: "#A5B4FC" },
  { name: "Other", value: 8.1, color: "#BAE6FD" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
        {payload[0].value.toLocaleString()}M
      </div>
    );
  }
  return null;
};

const TrafficCharts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 rounded-xl p-6  my-4 mx-2">
      {/* Bar Chart - Traffic by Device */}
      <div className="flex-1  bg-[#f7f9fb]  p-6 shadow-sm rounded-lg">
        <h4 className="text-sm font-semibold mb-4 text-black">
          Traffic by Device
        </h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={deviceData}>
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
            <YAxis
              tickFormatter={(v) => `${v}M`}
              stroke="#9ca3af"
              fontSize={12}
              domain={[0, 30]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" barSize={20} radius={[8, 8, 0, 0]}>
              {deviceData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart - Traffic by Location */}
      <div className="flex-1  bg-[#f7f9fb] shadow-sm p-6 rounded-lg flex flex-col items-center lg:items-start">
        <h4 className="text-sm font-semibold mb-4 text-black w-full">
          Traffic by Location
        </h4>
        <div className="flex flex-col lg:flex-row items-center w-full gap-4">
          <ResponsiveContainer width={160} height={160}>
            <PieChart>
              <Pie
                data={locationData}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
              >
                {locationData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <ul className="text-sm text-gray-700 space-y-2">
            {locationData.map((loc, index) => (
              <li
                key={index}
                className="flex items-center justify-between w-48"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: loc.color }}
                  />
                  <span>{loc.name}</span>
                </div>
                <span>{loc.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrafficCharts;
