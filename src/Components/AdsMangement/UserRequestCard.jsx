import React from "react";

export default function UserRequestCard() {
  return (
    <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4 my-3">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Natali Craig"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <p className="font-medium text-gray-800">Natali Craig</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-x-4">
        <div className="text-end w-full">
          <p className="text-xs text-gray-400">Joined on 12/09/2024</p>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
            App Marketing
          </span>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
            ✕ Decline
          </button>
          <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600">
            ✓ Approve
          </button>
        </div>
      </div>
    </div>
  );
}
