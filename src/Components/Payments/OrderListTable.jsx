import React, { useState } from "react";
import { FaSort, FaFilter, FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Checkbox } from "../ui/shared/Checkbox";
import { Button } from "../ui/shared/Button";
import { Input } from "../ui/shared/Input";
import { Card, CardContent } from "../ui/shared/Card";

const users = [
  {
    id: 1,
    name: "Natali Craig",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    type: "Advertiser",
    date: "Just now",
    status: "Paid",
    eta: "--",
  },
  {
    id: 2,
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    type: "Influencer",
    date: "A minute ago",
    status: "Paid",
    eta: "--",
  },
  {
    id: 3,
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    type: "Advertiser",
    date: "1 hour ago",
    status: "Paid",
    eta: "--",
  },
  {
    id: 4,
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    type: "Influencer",
    date: "Yesterday",
    status: "Pending",
    eta: "--",
  },
  {
    id: 5,
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    type: "Advertiser",
    date: "Feb 2, 2023",
    status: "Un Paid",
    eta: "31/07/2025",
  },
  {
    id: 6,
    name: "Natali Craig",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    type: "Influencer",
    date: "Just now",
    status: "Un Paid",
    eta: "31/07/2025",
  },
  {
    id: 7,
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    type: "Advertiser",
    date: "A minute ago",
    status: "Un Paid",
    eta: "31/07/2025",
  },
  {
    id: 8,
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    type: "Influencer",
    date: "1 hour ago",
    status: "Paid",
    eta: "--",
  },
  {
    id: 9,
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    type: "Advertiser",
    date: "Yesterday",
    status: "Pending",
    eta: "--",
  },
  {
    id: 10,
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    type: "Influencer",
    date: "Feb 2, 2023",
    status: "Un Paid",
    eta: "31/07/2025",
  },
];

const statusColors = {
  Paid: "text-green-400",
  Pending: "text-yellow-500",
  "Un Paid": "text-gray-400",
};

const PaymentListTable = () => {
  const [search, setSearch] = useState("");

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Payment Requests</h2>
      <CardContent className="overflow-x-auto">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <FaPlus className="cursor-pointer" />
            <FaFilter className="cursor-pointer" />
            <FaSort className="cursor-pointer" />
          </div>
          <div className="relative w-full md:w-64">
            <IoSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-8 text-sm rounded-md w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-500 whitespace-nowrap">
              <tr>
                <th className="px-2 py-2">
                  <Checkbox />
                </th>
                <th className="py-2">Users</th>
                <th className="py-2">User Type</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
                <th className="py-2">ETA</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-300 hover:bg-gray-50 text-xs sm:text-sm"
                >
                  <td className="px-2 py-2">
                    <Checkbox />
                  </td>
                  <td className="flex items-center space-x-2 py-2 whitespace-nowrap">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="truncate max-w-[120px]">{user.name}</span>
                  </td>
                  <td className="whitespace-nowrap">{user.type}</td>
                  <td className="whitespace-nowrap">{user.date}</td>
                  <td className="whitespace-nowrap">
                    <span
                      className={`text-xs font-medium ${
                        statusColors[user.status]
                      }`}
                    >
                      ● {user.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap">{user.eta}</td>
                  <td>
                    <Button className="bg-[#dffd53] hover:bg-lime-500 text-black font-semibold px-3 py-1 text-xs">
                      View More
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center space-x-2 mt-4 text-xs sm:text-sm">
          <button className="px-2 py-1">&lt;</button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`px-3 py-1 rounded ${
                n === 1 ? "bg-black text-white" : "bg-gray-100"
              }`}
            >
              {n}
            </button>
          ))}
          <button className="px-2 py-1">&gt;</button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentListTable;
