import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:w-[1170px] mx-auto">
      <div className="w-[400px] mx-auto">
        <div className="mb-[100px]  bg-slate-300 p-10 text-center rounded-xl">
          <p className="font-bold text-3xl mb-6 text-[#7469B6]">
            User Dashboard
          </p>
          <div className="flex space-x-4 justify-between items-center ">
            <Link to="/">Home</Link>
            <span>My Cart</span>
            <span>Payment History</span>
          </div>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
