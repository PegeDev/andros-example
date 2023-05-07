import Image from "next/image";
import React from "react";
import DogeLogo from "../../public/assets/images/doge.png";
import TrxLogo from "../../public/assets/images/trx.png";

function Withdraw({ coin }) {
  const CoinsUseLogo = () => {
    if (coin === "doge")
      return (
        <Image
          loading="lazy"
          src={DogeLogo}
          alt="logo"
          width={25}
          height={25}
        />
      );
    else
      return (
        <Image loading="lazy" src={TrxLogo} alt="logo" width={25} height={25} />
      );
  };
  return (
    <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
      <div className="w-full bg-[#FF0000] text-primary text-center text-[14px] ">
        Created Code
      </div>
      <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
        <div className="py-[4px] px-[8px] text-primary whitespace-nowrap">
          Amount :
        </div>
        <input
          type="text"
          placeholder="0.00000000"
          className="w-full h-full focus:outline-none text-center py-[4px] px-[8px]"
        />
        <div className="py-[4px] px-[8px] text-primary  whitespace-nowrap">
          <CoinsUseLogo />
        </div>
      </div>
      <button
        onClick={() => setModal(true)}
        className="border border-primary w-full rounded-[0.25rem] text-primary py-[4px] px-[8px] text-[14px] transition ease-linear duration-300"
      >
        Created Now
      </button>
      <div className="w-full bg-[#FF0000] text-primary text-center text-[14px] ">
        Withdraw
      </div>
      <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
        <div className="py-[4px] px-[8px] text-primary whitespace-nowrap">
          Amount :
        </div>
        <input
          type="text"
          placeholder="0.00000000"
          className="w-full h-full focus:outline-none text-center py-[4px] px-[8px]"
        />
        <div className="py-[4px] px-[8px] text-primary  whitespace-nowrap">
          <CoinsUseLogo />
        </div>
      </div>
      <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
        <div className="py-[4px] px-[8px] text-primary whitespace-nowrap">
          Wallet :
        </div>
        <input
          type="text"
          placeholder="Wallet Address"
          className="w-full h-full focus:outline-none text-center py-[4px] px-[8px]"
        />
        <div className="py-[4px] px-[8px] text-primary  whitespace-nowrap">
          <CoinsUseLogo />
        </div>
      </div>
      <button className="border border-primary w-full rounded-[0.25rem] text-primary py-[4px] px-[8px] text-[14px] transition ease-linear duration-300">
        Withdraw Now
      </button>
    </div>
  );
}

export default Withdraw;
