import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  FiHome,
  FiCreditCard,
  FiBarChart2,
  FiGrid,
  FiSettings,
  FiUser,
  FiDollarSign,
  FiTarget,
  FiChevronDown,
  FiList,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();

  // const [transactionsOpen, setTransactionsOpen] = useState(false);

  // Automatically open dropdown on transaction pages
  // useEffect(() => {
  //   if (location.pathname.startsWith("/transactions")) {
  //     setTransactionsOpen(true);
  //   }
  // }, [location.pathname]);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiHome />,
      path: "/",
    },
    {
      name: "Goal",
      icon: <FiTarget />,
      path: "/goals",
    },
    {
      name: "Reports",
      icon: <FiBarChart2 />,
      path: "/reports",
    },
    {
      name: "Categories",
      icon: <FiGrid />,
      path: "/categories",
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      path: "/settings",
    },
  ];

  // const transactionItems = [
  //   {
  //     name: "All Transactions",
  //     icon: <FiList />,
  //     path: "/transactions",
  //     end: true,
  //   },
  //   // {
  //   //   name: "Income",
  //   //   icon: <FiTrendingUp />,
  //   //   path: "/transactions/income",
  //   // },
  //   // {
  //   //   name: "Expenses",
  //   //   icon: <FiTrendingDown />,
  //   //   path: "/transactions/expenses",
  //   // },
  // ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col p-5 overflow-hidden shrink-0">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 shrink-0">
        <div className="bg-purple-600 text-white p-2 rounded-xl">
          <FiDollarSign size={24} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">
          SpendWise
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 min-h-0 overflow-y-auto space-y-2">

        {/* Dashboard */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-purple-100 text-purple-700 font-semibold"
                : "text-gray-500 hover:bg-purple-50 hover:text-purple-700"
            }`
          }
        >
          <FiHome className="text-xl" />
          <span>Dashboard</span>
        </NavLink>
{/* Transactions */}
<NavLink
  to="/transactions"
  end
  className={({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? "bg-purple-100 text-purple-700 font-semibold"
        : "text-gray-500 hover:bg-purple-50 hover:text-purple-700"
    }`
  }
>
  <FiCreditCard className="text-xl" />
  <span>Transactions</span>
</NavLink>

        {/* Other Menu Items */}
        {menuItems.slice(1).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
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

      {/* Profile - Always Bottom */}
      <div className="mt-auto border-t border-gray-200 pt-5 shrink-0">

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
