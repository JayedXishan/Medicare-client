import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { MdManageHistory, MdPayments, MdSpaceDashboard } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { TbCategory, TbReportMoney } from "react-icons/tb";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";

const DashboardLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isAdmin]=useAdmin();
  const [isSeller]=useSeller();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className="relative flex h-screen min-w-full ">
        {/* Navigation */}
        <div
          className={`bg-[#3b3939] text-white w-full pt-14 md:w-1/5 z-10 ${
            isNavOpen ? "absolute" : "hidden"
          } md:block`}
        >
          <div className="p-6 ">
            <h1 className="text-xl font-bold">Admin</h1>

            <ul className="mt-4 pb-10 ">
              {isAdmin ? (
                <>
                  <NavLink to="/admin/home">
                    {" "}
                    <li
                      className=" flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <svg
                        className="mr-1"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z"
                          fill="#EFCA08"
                        />
                      </svg>
                      Amin Home{" "}
                    </li>
                  </NavLink>

                  <NavLink to="/admin/manage-users">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <HiMiniUsers className="mr-2 text-xl" />
                      Manage Users
                    </li>
                  </NavLink>

                  <NavLink to="/admin/manage-category">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <TbCategory className="mr-2 text-xl" />
                      Manage Category{" "}
                    </li>
                  </NavLink>

                  <NavLink to="/admin/payment-manage">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <MdPayments className="mr-2 text-xl" />
                      Payment management{" "}
                    </li>
                  </NavLink>

                  <NavLink to="/admin/sales-report">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <TbReportMoney className="mr-2 text-xl" />
                      Sales Report{" "}
                    </li>
                  </NavLink>

                  <NavLink to="/admin/manage-banner">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <MdManageHistory className="mr-2 text-xl" />
                      Manage banner Add{" "}
                    </li>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/admin/manage-users">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <HiMiniUsers className="mr-2 text-xl" />
                      Manage Users
                    </li>
                  </NavLink>

                  <NavLink to="/admin/manage-category">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <TbCategory className="mr-2 text-xl" />
                      Manage Category{" "}
                    </li>
                  </NavLink>

                  <NavLink to="/admin/payment-manage">
                    <li
                      className="flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                      onClick={closeNav}
                    >
                      <MdPayments className="mr-2 text-xl" />
                      Payment management{" "}
                    </li>
                  </NavLink>
                </>
              )}

              <button>
                {" "}
                <li
                  className="absolute bottom-0 mb-10 flex items-center py-2 transition duration-300 ease-in-out hover:bg-white hover:text-[#3b3939] font-semibold  px-4 rounded-sm "
                  onClick={closeNav}
                >
                  <svg
                    height="25px"
                    className="mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.6"
                      d="M15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2Z"
                      fill="#EFCA08"
                    />
                    <path
                      opacity="0.4"
                      d="M8 8C8 6.46249 8 5.34287 8.14114 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H8.14114C8 18.6571 8 17.5375 8 16V12.75V11.25V8Z"
                      fill="#EFCA08"
                    />
                    <path
                      d="M4.46967 11.4697C4.17678 11.7626 4.17678 12.2374 4.46967 12.5303L6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303C7.82322 14.2374 7.82322 13.7626 7.53033 13.4697L6.81066 12.75L14 12.75C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25L6.81066 11.25L7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967L4.46967 11.4697Z"
                      fill="#fafafa"
                    />
                  </svg>
                  Logout
                </li>
              </button>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-4/5">
          {/* Toggle Button for Mobile */}
          <button
            className="md:hidden fixed bottom-4 right-4 z-20  text-white rounded-full p-3 shadow-2xl shadow-black border-2 border-slate-400"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <svg
                width="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8L7.99997 16M7.99999 8L16 16"
                  stroke="#9A031E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <MdSpaceDashboard className="text-slate-600 text-3xl" />
            )}
          </button>

          <div className="p-4 bg-[#F8F0FB] min-h-screen">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
