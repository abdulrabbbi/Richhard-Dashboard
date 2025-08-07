import React, { useState } from "react";

const RangeCutCalculator = () => {
  const [cutRanges, setCutRanges] = useState([
    { amount: 100, cut: 10 },
    { amount: 200, cut: 30 },
    { amount: 500, cut: 50 },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
      {/* Left Card */}
      <div className="bg-blue-50 rounded-xl p-6 shadow">
        <h3 className="font-semibold text-lg mb-4">Set Range of Cut</h3>
        <div className="space-y-4">
          {cutRanges.map((item, idx) => (
            <div key={idx}>
              <p className="text-sm font-medium mb-1">${item.amount}</p>
              <div className="relative">
                <input
                  type="number"
                  value={item.cut}
                  onChange={(e) => {
                    const updated = [...cutRanges];
                    updated[idx].cut = parseInt(e.target.value || "0");
                    setCutRanges(updated);
                  }}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 font-semibold">%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="font-semibold text-lg mb-4">Range Calculator</h3>
        <div className="space-y-6">
          {cutRanges.map((item, idx) => (
            <div key={idx}>
              <p className="text-sm text-gray-500">On every ${item.amount}</p>
              <p className="text-lg font-semibold">
                ${Math.round((item.amount * item.cut) / 100)} moved to Influencer account
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RangeCutCalculator;
