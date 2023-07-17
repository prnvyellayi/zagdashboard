import React from "react";
import Body from "../components/body";

const Workspaces = () => {

  const Header = () => {
    return (
      <div className="flex flex-row items-center justify-between mx-[35px] py-[27px] border-b border-gray-300">
        <span className="text-base-shade-100 text-2xl font-bold">Orders</span>
        <button className="inline-flex px-2 py-3 justify-center items-center bg-blue-500 h-[40px] w-32 font-semibold rounded-10 text-14 text-white">+ Add Order</button>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col overflow-y-scroll overflow-x-hidden">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default Workspaces;
