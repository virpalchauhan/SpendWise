
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 min-h-0 overflow-y-auto p-5 bg-gray-50">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default Layout;
