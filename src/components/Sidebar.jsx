
import React from "react";
import {NavLink} from "react-router-dom"
import {
  FiHome,
  FiCreditCard,
  FiBarChart2,
  FiGrid,
  FiSettings,
  FiUser,
  FiDollarSign,
} from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FiHome /> ,path:"/" },
    { name: "Transactions", icon: <FiCreditCard /> ,path:"/Transactions" },
    { name: "Reports", icon: <FiBarChart2 />  ,path:"/Reports"},
    { name: "Categories", icon: <FiGrid /> ,path:"/Categories" },
    { name: "Settings", icon: <FiSettings /> ,path:"/Settings" },

  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-5 overflow-hidden">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 shrink-0">
        <div className="bg-purple-600 text-white p-2 rounded-xl">
          <FiDollarSign size={24} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">
          SpendWise
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 min-h-0 overflow-y-auto space-y-2">

{menuItems.map((item, index) => (
  <NavLink
    key={index}
    to={item.path}
    end={item.path === "/"}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
      ${
        isActive
          ? "bg-purple-100 text-purple-700 font-semibold"
          : "text-gray-500 hover:bg-purple-50 hover:text-purple-700"
      }`
    }
  >
    <span className="text-xl">
      {item.icon}
    </span>

    <span>{item.name}</span>
  </NavLink>
))}

      </nav>

      {/* Profile */}
      <div className="border-t border-gray-200 pt-5 mt-4 shrink-0">

        <div className="flex items-center gap-3">

          <div className="bg-purple-100 text-purple-700 p-3 rounded-full">
            <FiUser size={20} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Virpal
            </h3>

            <p className="text-xs text-gray-500">
              Personal Account
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
