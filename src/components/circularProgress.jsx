import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const current = 42;
  const newcust = 64;
  const target = 58;
  const rertarget = 81;
  return (
    <>
      <div className="flex flex-col h-[242px] justify-center w-[55%] px-10 bg-white rounded-30 shadow-lg">
        <span className="text-xl text-left font-semibold mb-6 font-Poppins">
          All Customers
        </span>
        <div className="flex flex-row justify-between font-sans">
          <span className="h-[109px] flex flex-col items-center justify-center mr-5">
            <CircularProgressbar
              value={current}
              text={`${current}%`}
              styles={{
                root: { width: "90px", height: "90px" },
                path: { stroke: "#5F27CD" },
                text: {
                  fill: "#5F27CD",
                  fontSize: "24px",
                  fontWeight: 700
                },
              }}
              className="mb-2"
            />
            <span className="text-gray-400 text-14 font-semibold">
              Current Customer
            </span>
          </span>
          <span className="h-[109px] flex flex-col items-center justify-center mr-5">
            <CircularProgressbar
              value={newcust}
              text={`${newcust}%`}
              styles={{
                root: { width: "90px", height: "90px" },
                path: { stroke: "rgba(22, 192, 152, 0.38)" },
                text: {
                  fill: "rgba(22, 192, 152, 0.38)",
                  fontSize: "24px",
                  fontWeight: 700
                },
              }}
              className="mb-2"
            />
            <span className="text-gray-400 text-14 font-semibold">
              New Customer
            </span>
          </span>
          <span className="h-[109px] flex flex-col items-center justify-center mr-5">
            <CircularProgressbar
              value={target}
              text={`${target}%`}
              styles={{
                root: { width: "90px", height: "90px" },
                path: { stroke: "#FF6B6B" },
                text: {
                  fill: "#FF6B6B",
                  fontSize: "24px",
                  fontWeight: 700
                },
              }}              
              className="mb-2"
            />
            <span className="text-gray-400 text-14 font-semibold">
              Target Customer
            </span>
          </span>
          <span className="h-[109px] flex flex-col items-center justify-center mr-5">
            <CircularProgressbar
              value={rertarget}
              text={`${rertarget}%`}
              styles={{
                root: { width: "90px", height: "90px" },
                path: { stroke: "#FFC5C5" },
                text: {
                  fill: "#FFC5C5",
                  fontSize: "24px",
                  fontWeight: 700
                },
              }}              
              className="mb-2"
            />
            <span className="text-gray-400 text-14 font-semibold">
              Retarget Customer
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default CircularProgress;
