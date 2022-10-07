import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="w-screen min-h-screen flex">
      {/* Left Side */}
      <aside className="w-[250px] h-screen flex flex-col bg-white shadow-lg">
        <div className="w-full h-[200px] flex flex-col justify-center items-center bg-gradient-to-tr from-orange-700 to-orange-300">
          <h1 className="text-4xl text-white">Dashboard</h1>
        </div>
        <nav className="w-full flex-1">
          <Link to={"/"} className="w-full h-12 flex items-center px-4 hover:bg-orange-100 focus:bg-orange-100">
            Dashboard
          </Link>
          <Link to={"/users"} className="w-full h-12 flex items-center px-4 hover:bg-orange-100 focus:bg-orange-100">
            User
          </Link>
          <Link to={"/blog"} className="w-full h-12 flex items-center px-4 hover:bg-orange-100 focus:bg-orange-100 focus:border-solid">
            Blog
          </Link>
        </nav>
      </aside>
      {/* End Left Side */}

      {/* RIGHT SIDE */}
      <div className="flex-1 h-screen p-6 overflow-y-auto">
        <Outlet />
      </div>
      {/* END RIGHT SIDE */}
    </div>
  );
}
