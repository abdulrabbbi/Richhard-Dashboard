"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

// Sample data for Marketing & SEO (Monthly)
const marketingSEOData = [
  { name: "Jan", value: 23, color: "#8b9eff" },
  { name: "Feb", value: 26, color: "#b0e8bd" },
  { name: "Mar", value: 24, color: "#1f1f1f" },
  { name: "Apr", value: 28, color: "#a5e3ff" },
  { name: "May", value: 21, color: "#97b7cc" },
  { name: "Jun", value: 26, color: "#94dfc6" },
  { name: "Jul", value: 23, color: "#8b9eff" },
  { name: "Aug", value: 26, color: "#b0e8bd" },
  { name: "Sep", value: 24, color: "#1f1f1f" },
  { name: "Oct", value: 28, color: "#a5e3ff" },
  { name: "Nov", value: 21, color: "#97b7cc" },
  { name: "Dec", value: 26, color: "#94dfc6" },
];

// Custom tooltip (optional)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded p-2 shadow text-sm">
        <p className="font-semibold">{label}</p>
        <p>{`${payload[0].value}M`}</p>
      </div>
    );
  }
  return null;
};

const MarketingSEOChart = () => {
  return (
    <div className="bg-[#f7f9fb] mx-7  p-6 rounded-lg shadow-sm">
      <h4 className="text-sm font-semibold mb-4 text-black">
        Marketing & SEO
      </h4>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={marketingSEOData} barCategoryGap={20}>
          <XAxis
            dataKey="name"
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `${v}M`}
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            domain={[0, 30]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" barSize={20} radius={[8, 8, 0, 0]}>
            {marketingSEOData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketingSEOChart;
