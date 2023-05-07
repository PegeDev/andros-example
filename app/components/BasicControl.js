import Image from "next/image";
import React from "react";
import DogeLogo from "../../public/assets/images/doge.png";
import TrxLogo from "../../public/assets/images/trx.png";

function BasicControl({ coin }) {
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
      <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
        <div className="px-[8px] py-[4px] text-center whitespace-nowrap text-primary ">
          Base Trade :
        </div>
        <input
          placeholder="0.00000000"
          type="text"
          className="w-full h-full focus:outline-none p-[0.3rem]"
        />
        <div className="px-[8px] py-[4px] inline-flex items-center h-full ">
          <CoinsUseLogo />
        </div>
      </div>
      <div className="w-full flex space-x-4">
        <div className="w-full grid sm:grid-cols-2 gap-2">
          <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
            <div className="px-[8px] py-[4px] text-center whitespace-nowrap text-primary">
              Shoot :
            </div>
            <input
              type="text"
              placeholder="0.00000000"
              className="w-full h-full focus:outline-none p-[0.3rem]   text-[0.875rem]"
            />
            <div className="px-[8px] py-[4px] inline-flex items-center h-full ">
              <CoinsUseLogo />
            </div>
          </div>

          <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
            <div className="px-[8px] py-[4px] text-center whitespace-nowrap text-primary ">
              Boom :
            </div>
            <input
              type="text"
              placeholder="0.00000000"
              className="w-full h-full focus:outline-none p-[0.3rem]"
            />
            <div className="px-[8px] py-[4px] inline-flex items-center h-full ">
              <CoinsUseLogo />
            </div>
          </div>
          <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
            <div className="px-[8px] py-[4px] text-center whitespace-nowrap text-primary ">
              Chance :
            </div>
            <input
              type="number"
              placeholder="MIN"
              min={0}
              max={100}
              className="w-full h-full focus:outline-none p-[0.3rem]"
            />
            <div className="px-[8px] py-[4px] h-full inline-flex items-center justify-center text-primary text-center">
              to
            </div>
            <input
              type="text"
              placeholder="MAX"
              min={0}
              max={100}
              className="w-full h-full focus:outline-none p-[0.3rem]"
            />
          </div>
          <div className="w-full border border-primary  text-[0.875rem] flex items-center justify-center rounded-[0.25rem] overflow-hidden">
            <div className="px-[8px] py-[4px] text-center whitespace-nowrap text-primary ">
              Delay :
            </div>
            <input
              type="text"
              placeholder="0.00000000"
              className="w-full h-full focus:outline-none p-[0.3rem]"
            />
            <div className="px-[8px] py-[4px] h-full  inline-flex items-center text-primary text-center">
              Ms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicControl;
