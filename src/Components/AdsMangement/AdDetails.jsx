import React from "react";
import SimpleMap from "../Map/Map";
const AdDetails = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-6">Ad Details</h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            {/* Category & Payment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500">Category</label>
                <input
                  type="text"
                  value="App Marketing"
                  readOnly
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500">
                  Payment Slot
                </label>
                <input
                  type="text"
                  value="$100"
                  readOnly
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
                />
              </div>
            </div>

            {/* Ads View */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Ads View</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                  Feed
                </span>
                <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                  Stories
                </span>
              </div>
            </div>

            {/* Demographics */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Demographics</h3>
              <label className="block text-sm text-gray-500 mb-1">
                User Interests
              </label>
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                All Users
              </span>
            </div>

            {/* Area + Map */}
            <div>
              <label className="block text-sm text-gray-500 mb-2">Area</label>
              <div className="h-64 w-full rounded-xl overflow-hidden mb-2">
                <SimpleMap center={{ lat: 51.5072, lng: -0.1276 }} />
              </div>
              <input
                type="text"
                value="London"
                readOnly
                className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex justify-center items-center">
            <img
              src="public\assets\Frame 3448.png"
              alt="Ad Preview"
              className="rounded-lg h-full w-full max-w-xs object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdDetails;
