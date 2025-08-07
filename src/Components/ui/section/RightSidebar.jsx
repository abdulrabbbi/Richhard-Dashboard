import React, { useState } from "react";
import { IoClose, IoNotifications } from "react-icons/io5";
import { MdBugReport, MdUpdate, MdDelete } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const dummyNotifications = [
  { id: 1, title: "You have a bug that needs...", time: "Just now" },
  { id: 2, title: "New user registered", time: "59 minutes ago" },
  { id: 3, title: "You have a bug that needs...", time: "12 hours ago" },
  { id: 4, title: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const dummyActivities = [
  {
    id: 1,
    icon: <MdBugReport />,
    text: "You have a bug that needs...",
    time: "Just now",
  },
  {
    id: 2,
    icon: <MdUpdate />,
    text: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: 3,
    icon: <MdBugReport />,
    text: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    text: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    icon: <MdDelete />,
    text: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const dummyContacts = [
  "Natali Craig",
  "Drew Cano",
  "Orlando Diggs",
  "Andi Lane",
  "Kate Morrison",
  "Koray Okumus",
];

const RightSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 right-0 w-80 bg-white transform z-[1001]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0 transition-transform duration-200 ease-in-out
         z-30 overflow-y-auto `}
      >
        <div className="p-4 space-y-8">
          {/* Close on Mobile */}
          <button
            className="absolute top-4 right-4 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={24} />
          </button>

          {/* Notifications */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-2 py-3">
              Notifications
            </h3>
            <div className="space-y-4">
              {dummyNotifications.map((n) => (
                <div key={n.id} className="flex items-start gap-2">
                  <IoNotifications className="text-blue-500 mt-1" />
                  <div className="text-sm">
                    <p className="text-gray-800">{n.title}</p>
                    <p className="text-xs text-gray-400">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Activities
            </h3>
            <div className="space-y-4">
              {dummyActivities.map((a, index) => (
                <div key={a.id} className="flex items-start gap-2">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt={a}
                    className="h-8 w-8 rounded-full object-cover"
                  />{" "}
                  <div className="text-sm">
                    <p className="text-gray-800">{a.text}</p>
                    <p className="text-xs text-gray-400">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Contacts
            </h3>
            <div className="space-y-4">
              {dummyContacts.map((name, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt={name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <p className="text-sm text-gray-800 font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
