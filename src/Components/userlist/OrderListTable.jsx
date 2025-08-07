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
    type: "Viewer",
    date: "Just now",
    status: "Online",
  },
  {
    id: 2,
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    type: "Influencer",
    date: "A minute ago",
    status: "Online",
  },
  {
    id: 3,
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    type: "Advertiser",
    date: "1 hour ago",
    status: "Online",
  },
  {
    id: 4,
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    type: "Influencer",
    date: "Yesterday",
    status: "Offline",
  },
  {
    id: 5,
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    type: "Viewer",
    date: "Feb 2, 2023",
    status: "Away",
  },
  {
    id: 6,
    name: "Natali Craig",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    type: "Viewer",
    date: "Just now",
    status: "Away",
  },
  {
    id: 7,
    name: "Kate Morrison",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    type: "Influencer",
    date: "A minute ago",
    status: "Away",
  },
  {
    id: 8,
    name: "Drew Cano",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    type: "Advertiser",
    date: "1 hour ago",
    status: "Online",
  },
  {
    id: 9,
    name: "Orlando Diggs",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    type: "Admin",
    date: "Yesterday",
    status: "Offline",
  },
  {
    id: 10,
    name: "Andi Lane",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    type: "Admin",
    date: "Feb 2, 2023",
    status: "Away",
  },
];

const statusColors = {
  Online: "text-green-500",
  Offline: "text-orange-400",
  Away: "text-gray-400",
};

const OrderListTable = () => {
  const [search, setSearch] = useState("");

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold">Order List</h2>
      <CardContent>
        <div className="overflow-x-auto w-full">
          <table className="min-w-max w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="px-2 py-2">
                  <Checkbox />
                </th>
                <th className="py-2">Users</th>
                <th className="py-2">Account Type</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-300 hover:bg-gray-50"
                  style={{ borderBottomWidth: "0.2px" }}
                >
                  <td className="px-2 py-2">
                    <Checkbox />
                  </td>
                  <td className="flex items-center space-x-2 py-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{user.name}</span>
                  </td>
                  <td>{user.type}</td>
                  <td>{user.date}</td>
                  <td>
                    <span
                      className={`text-sm font-medium ${
                        statusColors[user.status]
                      }`}
                    >
                      ● {user.status}
                    </span>
                  </td>
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
        <div className="flex justify-end items-center space-x-2 mt-4">
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

export default OrderListTable;
