import React from "react";
import StatsOverview from "../Components/dashboard/StatsOverview";
import UserTrafficChart from "../Components/dashboard/UserTrafficChart";
import TrafficCharts from "../Components/dashboard/TrafficCharts";
import MarketingSEOChart from "../Components/dashboard/MarketingSEOChart";

const DashboardContent = () => {
  return (
    <div className="bg-white">
      <StatsOverview />
      <UserTrafficChart />
      <TrafficCharts />
      <MarketingSEOChart />
    </div>
  );
};

export default DashboardContent;
