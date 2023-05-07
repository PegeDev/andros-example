import React from "react";

function ProfitSection() {
  return (
    <div className="w-full flex items-center justify-center p-[0.3rem] font-medium text-[0.875rem]">
      <div className="w-full flex flex-col items-center justify-center text-primary">
        <span className="">Profit Global</span>
        <span className="text-blue-500">0</span>
      </div>
      <div className="w-full text-primary flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <span className="">W</span>
          <span className=" text-green-500">0</span>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <span className="">L</span>
          <span className=" text-red-500">0</span>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <span className="">R</span>
          <span className=" ">0</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-primary">
        <span className="">Profit Session</span>
        <span className="text-gray-500">0</span>
      </div>
    </div>
  );
}

export default ProfitSection;
