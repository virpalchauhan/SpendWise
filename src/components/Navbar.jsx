
import React, { useState } from "react";
import {
  FiSearch,
  FiBell,
  FiSun,
  FiMoon,
  FiUser,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [showProfile, setShowProfile] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-purple-600 text-xl">
          <FiMenu />
        </button>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Dashboard
          </h2>
          <p className="text-xs text-gray-500">
            Welcome back to SpendWise
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-xl w-64">
          <FiSearch className="text-gray-500 text-lg" />

          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all"
          title="Toggle Theme"
        >
          {theme === "light" ? (
            <FiMoon size={20} />
          ) : (
            <FiSun size={20} />
          )}
        </button>

        {/* Notification */}
        <button className="relative p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all">
          <FiBell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="relative">

          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center">
              <FiUser size={21} />
            </div>

            <div className="hidden sm:block text-left">
              <h3 className="text-sm font-semibold text-gray-800">
                Virpal
              </h3>
              <p className="text-xs text-gray-500">
                Personal Account
              </p>
            </div>

            <FiChevronDown className="text-gray-500" />
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute right-0 top-14 w-48 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50">

              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg">
                <FiUser />
                My Profile
              </button>

              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg">
                <FiChevronDown />
                Account Settings
              </button>

            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;
