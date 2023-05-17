"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { IoClipboardOutline } from "react-icons/io5";
import Html5scanner from "./Html5scanner";

function Deposit({ setModalScan, resultScan }) {
  const [inputReedem, setInputReedem] = useState("");
  return (
    <>
      <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
        <div className="w-full bg-green-700 text-primary text-center text-[14px] ">
          Redeem Code
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-2 ">
          <div className="w-full flex items-center justify-center border border-primary divide-x divide-primary rounded-[0.25rem]  ">
            <div className="w-full h-full flex items-center justify-center text-[0.875rem]">
              <div className="py-[4px] px-[8px] text-primary whitespace-nowrap">
                Code Reedem :
              </div>
              <input
                type="text"
                placeholder="Your Code"
                onChange={(e) => setInputReedem(e.target.value)}
                value={resultScan !== undefined ? resultScan : inputReedem}
                className="w-full h-full focus:outline-none p-[0.3rem] text-center"
              />
            </div>
            <div className=" h-full flex items-center justify-center text-[0.875rem]">
              <button
                onClick={() => setModalScan(true)}
                className="py-[4px] px-[20px] text-primary space-x-2 inline-flex items-center justify-center whitespace-nowrap transition ease-linear duration-300"
                type="button"
              >
                <BsQrCodeScan />
              </button>
            </div>
            <div className=" h-full flex items-center justify-center text-[0.875rem]">
              <button
                className="py-[4px] px-[20px] text-primary space-x-2 inline-flex items-center justify-center whitespace-nowrap transition ease-linear duration-300"
                type="button"
              >
                PASTE
              </button>
            </div>
          </div>
          <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
            <button
              className="py-[4px] px-[8px] text-primary  whitespace-nowrap transition ease-linear duration-300"
              type="button"
            >
              Reedem Now
            </button>
          </div>
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
    </>
  );
}

export default Deposit;
