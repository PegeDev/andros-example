import Image from "next/image";
import React from "react";
import { IoClipboardOutline } from "react-icons/io5";

function Deposit() {
  return (
    <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
      <div className="w-full bg-green-700 text-primary text-center text-[14px] ">
        Redeem Code
      </div>
      <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
        <div className="py-[4px] px-[8px] text-primary whitespace-nowrap">
          Code Reedem :{" "}
        </div>
        <input
          type="text"
          placeholder="Your Code"
          className="w-full h-full focus:outline-none p-[0.3rem] text-center"
        />
        <button
          className="py-[4px] px-[8px] text-primary  whitespace-nowrap transition ease-linear duration-300"
          type="button"
        >
          Reedem Now
        </button>
      </div>
      <div className="w-full bg-green-700 text-primary text-center text-[14px] ">
        Deposit
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className=" rounded-[10px] overflow-hidden">
          <Image
            loading="lazy"
            src="https://chart.googleapis.com/chart?chs=200x200&amp;cht=qr&amp;chl=TFqqT1PmXrJFj9zLSL8BvRCLaoSoCE1ZpD&amp;chld=M|1&amp;choe=UTF-8"
            alt="qr-code"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
        <div className="py-[4px] px-[8px] text-primary whitespace-nowrap">
          Wallet Address :
        </div>
        <input
          type="text"
          value={"TFqqT1PmXrJFj9zLSL8BvRCLaoSoCE1ZpD"}
          disabled
          className="w-full h-full focus:outline-none disabled:bg-white text-center p-[0.3rem]"
        />
        <button
          className="py-[4px] px-[8px] text-primary  whitespace-nowrap space-x-2 inline-flex items-center transition ease-linear duration-300"
          type="button"
        >
          <span>
            <IoClipboardOutline size={20} />
          </span>
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
}

export default Deposit;
