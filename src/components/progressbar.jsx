import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import data from '../test.json'

const Progress = () => {

    const total = data.length
    const active = data.filter(each => each.status === 'Active').length
    const customactive = Math.ceil(active*100/total)
    const inactive = total - active
    const custominactive = Math.floor(inactive*100/total)

  return (
    <>
      <div className="flex flex-col h-[242px] p-10 rounded-30 bg-white w-5/12 rounded-30 shadow-lg justify-between">
        <span className="font-Poppins text-xl font-bold mb-5">Stats Overview</span>
        <div className="flex flex-col items-left h-[fit-content]">
            <span className="font-sans text-14 text-left font-semibold text-gray-400">Active</span>
            <ProgressBar completed={active} maxCompleted={total} labelAlignment='outside' customLabel={`${customactive}%`} labelColor='#A7A7A7' labelSize='14px' height="8px" bgColor='#16C09861' className="mb-5 text-right"/>
        </div>
        <div className="flex flex-col items-left h-[fit-content]">
            <span className="font-sans text-14 text-left font-semibold text-gray-400">Inactive</span>
            <ProgressBar completed={inactive} maxCompleted={total} labelAlignment='outside' customLabel={`${custominactive}%`} labelColor='#A7A7A7' labelSize='14px' height="8px" bgColor="#FF6B6B" className="text-right"/>
        </div>
      </div>
    </>
  );
};

export default Progress;
