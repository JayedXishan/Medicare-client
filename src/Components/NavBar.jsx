import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { FaShieldHeart } from "react-icons/fa6";
import useCart from "../Hooks/useCart";

const NavBar = () => {
  const { logout, user } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [cart] = useCart();
  return (
    <div>
      <div className="lg:w-[1170px] mx-auto  mb-[20px]">
        <header className="p-4">
          <div className="container flex justify-between items-center h-16 mx-auto">
            <div className="lg:hidden">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <Link to="/" className="text-[#E1AFD1]">
                    Home
                  </Link>
                  <Link to="/" className="text-[#E1AFD1]">
                    Shop
                  </Link>
                  <Link to="/dashboard/cart" className="mr-4 text-[#E1AFD1]">
                    Cart
                  </Link>
                </ul>
              </div>
            </div>

            <Link to="/" className="flex items-center p-2  ">
              <div className="flex justify-center items-center space-x-2">
                <FaShieldHeart className="text-[#7469B6] text-[40px]" />
                <span className="text-[#7469B6]  text-5xl ">MediCare</span>
              </div>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex text-gray-700 font-extralight ">
              <li className="flex">
                <Link
                  to="/"
                  className="flex items-center px-4 text-[#E1AFD1] hover:font-normal hover:text-[#7469B6]"
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/"
                  className="text-[#E1AFD1] flex items-center px-4 hover:font-normal hover:text-[#7469B6]"
                >
                  Shop
                </Link>
              </li>
              <li className="flex">
                <Link
                  to="/dashboard/cart"
                  className="text-[#E1AFD1] flex items-center px-4 hover:font-normal hover:text-[#7469B6]"
                >
                  <div className="space-x-2">
                    <span>Cart</span>
                    <span className="rounded-full p-1 text-white bg-[#7469B6]"><small>+{cart.length}</small></span>
                  </div>
                </Link>
              </li>

              <div>
                <div className="dropdown dropdown-right">
                  <div
                    tabIndex={0}
                    role="button"
                    className="text-[#E1AFD1] flex items-center px-4 hover:font-normal hover:text-[#7469B6] m-1"
                  >
                    Lang
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>English</a>
                    </li>
                    <li>
                      <a>Bengali</a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>

            <div>
              {user?.email ? (
                <div className="flex space-x-2">
                  <div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          />

                          {isHovered && (
                            <div className="absolute bg-gray-800 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap bottom-0 left-1/2">
                              <span>{user.displayName}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a className="justify-between text-primary">
                            Profile
                            <span className="badge">New</span>
                          </a>
                          <small className="text-xs">{user.displayName}</small>
                          <Link>Update Profile</Link>
                          <Link to="/dashboard">Dashboard</Link>
                          <button className="text-[#E1AFD1]" onClick={logout}>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="items-center space-x-2 flex-shrink-0  lg:flex">
                  {/* <Link
                    to="/login"
                    className="self-center px-7 py-[10px] rounded border-2 border-[#E1AFD1] text-[#7469B6] hidden lg:flex  transition ease-linear delay-200 duration-300 hover:bg-gradient-to-r hover:from-[#E1AFD1] hover:via-[#AD88C6] hover:to-[#7469B6] hover:text-white "
                  >
                    Sign in
                  </Link> */}
                  <Link
                    to="/register"
                    className="self-center px-8 py-3  rounded bg-gradient-to-r from-[#7469B6] via-[#AD88C6] to-[#E1AFD1] text-white  transition ease-linear delay-200 duration-300 hover:bg-gradient-to-r hover:from-[#E1AFD1] hover:via-[#AD88C6] hover:to-[#7469B6] hover:text-white "
                  >
                    Join Us
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
