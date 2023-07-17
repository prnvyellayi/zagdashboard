import React from "react";
import zaglogo from "../images/zaglogo.jpg";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { BiTrendingUp } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col bg-white w-[246px] h-screen items-center p-[26px] rounded-r-[20px] shadow-lg">
        <span
          className="bg bg-lightgray bg-center bg-cover bg-no-repeat w-[73px] h-[47px] mb-12"
          style={{ backgroundImage: `url(${zaglogo})` }}
        ></span>
        <Link
          to="/reports"
          className={`flex flex-row w-full justify-start p-4 rounded-[10px] mb-2 ${
            location.pathname === "/reports" ? "bg-blue-500 bg-opacity-10" : ""
          }`}
        >
          <span className="h-full w-1/4 flex items-center justify-center">
            <BiTrendingUp
              size={25}
              color={location.pathname === "/reports" ? "#1B59F8" : ""}
            />
          </span>
          <span
            className={`h-full w-3/4 flex text-center items-center ${
              location.pathname === "/reports" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Reports
          </span>
        </Link>
        <Link
          to="/"
          className={`flex w-full flex-row justify-start p-4 rounded-[10px] mb-2 ${
            location.pathname === "/" ? "bg-blue-500 bg-opacity-10" : ""
          }`}
        >
          <span className="h-full w-1/4 flex items-center justify-center">
            <BsGrid3X2GapFill
              size={25}
              color={location.pathname === "/" ? "#1B59F8" : ""}
            />
          </span>
          <span
            className={`h-full w-3/4 flex text-center items-center ${
              location.pathname === "/" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Workspaces
          </span>
        </Link>
        <Link
          to="/settings"
          className={`flex flex-row w-full justify-start p-4 rounded-[10px] ${
            location.pathname === "/settings" ? "bg-blue-500 bg-opacity-10" : ""
          }`}
        >
          <span className="h-full w-1/4 flex items-center justify-center">
            <IoSettingsSharp
              size={25}
              color={location.pathname === "/settings" ? "#1B59F8" : ""}
            />
          </span>
          <span
            className={`h-full w-3/4 flex text-center items-center ${
              location.pathname === "/settings" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Settings
          </span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
