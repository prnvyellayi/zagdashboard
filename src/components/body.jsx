import React from "react";
import CircularProgress from "./circularProgress";
import Progress from "./progressbar";
import TableComponent from './tablecomponent'

const Body = () => {
  return (
    <>
      <div className="flex flex-col p-[70px]">
        <div className="flex flex-row w-full justify-between mb-9">
          <CircularProgress />
          <Progress />
        </div>
        <div className="flex flex-col w-full bg-white h-[fit-content] rounded-30 shadow-lg py-7">
          <TableComponent />
        </div>
      </div>
    </>
  );
};

export default Body;
