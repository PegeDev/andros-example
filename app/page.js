"use client";
import Image from "next/image";
import Logo from "../public/assets/images/logo-ban.png";
import DogeLogo from "../public/assets/images/doge.png";
import {
  IoDesktopOutline,
  IoDownloadOutline,
  IoStopCircleOutline,
  IoPersonOutline,
  IoReload,
  IoSettingsOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState("desktop");

  const navbarItems = [
    {
      name: "desktop",
      icons: <IoDesktopOutline size={20} />,
    },
    {
      name: "setting",
      icons: <IoSettingsOutline size={20} />,
    },
    {
      name: "upload",
      icons: <IoDownloadOutline size={20} />,
    },
    {
      name: "download",
      icons: <IoDownloadOutline className="rotate-180" size={20} />,
    },
    {
      name: "trophy",
      icons: <IoTrophyOutline size={20} />,
    },
    {
      name: "user",
      icons: <IoPersonOutline size={20} />,
    },
  ];

  return (
    <div className="flex items-center justify-center mx-auto w-full h-screen max-w-[33.75rem] select-none">
      <div className="border border-primary rounded-[0.5rem] w-full divide-y-2 divide-primary relative">
        <div className="w-full flex items-center justify-between px-[1rem]">
          <div className="w-[9.375rem] h-[3.125rem]">
            <Image src={Logo} alt="logo" width={150} height={50} />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="">
              <Image src={DogeLogo} alt="logo" width={25} height={25} />
            </span>
            <h2 className="text-primary">0.00000000</h2>
          </div>
        </div>
        <div className="p-[0.5rem] space-y-4">
          <div className="flex items-center justify-between divide-x-2 divide-primary border-2 border-primary rounded-[0.5rem] ">
            {navbarItems.map((val, index) => (
              <button
                key={index}
                onClick={() => setActive(val.name)}
                className={`relative flex items-center justify-center text-center w-full p-[0.5rem] ${
                  active === val.name ? "text-black" : "text-primary"
                }`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className={`z-10 mix-blend-difference text-primary`}>
                  {val.icons}
                </span>
                {active === val.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute  w-full inset-0 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
          {active === "desktop" && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
            >
              <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
                <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                  <div className="w-44 text-center whitespace-nowrap text-primary ">
                    Base Trade :
                  </div>
                  <input
                    placeholder="0.00000000"
                    type="text"
                    className="w-full h-full focus:outline-none p-[0.3rem]"
                  />
                  <div className="min-w-[2rem] px-[0.25rem] inline-flex items-center h-full ">
                    <Image
                      width={30}
                      height={30}
                      src={DogeLogo}
                      alt="doge-logo"
                    />
                  </div>
                </div>
                <div className="w-full flex space-x-4">
                  <div className="flex flex-col space-y-2">
                    <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                      <div className="w-44 text-center whitespace-nowrap text-primary">
                        Shoot :
                      </div>
                      <input
                        type="text"
                        placeholder="0.00000000"
                        className="w-full h-full focus:outline-none p-[0.3rem]   text-[0.875rem]"
                      />
                      <div className="min-w-[2rem] px-[0.25rem] inline-flex items-center h-full ">
                        <Image
                          width={30}
                          height={30}
                          src={DogeLogo}
                          alt="doge-logo"
                        />
                      </div>
                    </div>
                    <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                      <div className="w-44 text-center whitespace-nowrap text-primary px-[0.25rem]">
                        Chance :
                      </div>
                      <input
                        type="number"
                        placeholder="MIN"
                        min={0}
                        max={100}
                        className="w-full h-full focus:outline-none p-[0.3rem]"
                      />
                      <div className="w-full h-full px-[0.25rem] inline-flex items-center justify-center text-primary text-center">
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
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                      <div className="w-44 text-center whitespace-nowrap text-primary ">
                        Shoot :
                      </div>
                      <input
                        type="text"
                        placeholder="0.00000000"
                        className="w-full h-full focus:outline-none p-[0.3rem]"
                      />
                      <div className="min-w-[2rem] px-[0.25rem] inline-flex items-center h-full ">
                        <Image
                          width={30}
                          height={30}
                          src={DogeLogo}
                          alt="doge-logo"
                        />
                      </div>
                    </div>
                    <div className="w-full border border-primary  text-[0.875rem] flex items-center justify-center rounded-[0.25rem] overflow-hidden">
                      <div className="w-44 text-center whitespace-nowrap text-primary ">
                        Delay :
                      </div>
                      <input
                        type="text"
                        placeholder="0.00000000"
                        className="w-full h-full focus:outline-none p-[0.3rem]"
                      />
                      <div className="min-w-[2rem] h-full px-[0.25rem] inline-flex items-center text-primary text-center">
                        Ms
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {active === "setting" && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
            >
              <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
                <div className="  grid grid-cols-2 gap-2 ">
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Profit Global :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Stop
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Logic :
                    </div>
                    <select
                      id="underline_select"
                      className="text-center p-[0.3rem] w-full text-[14px] text-primary border border-primary bg-transparent  appearance-none focus:outline-none peer"
                    >
                      <option
                        className="text-primary bg-black"
                        selected
                        value="random"
                      >
                        Random
                      </option>
                      <option className="text-primary bg-black" value="high">
                        High
                      </option>
                      <option className="text-primary bg-black" value="low">
                        Low
                      </option>
                    </select>
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Trade
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Profit Session :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Reset
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Balance Below :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Stop
                    </div>
                  </div>
                </div>

                <div className="w-full bg-green-700 text-primary text-center text-[14px]">
                  On WIN
                </div>

                <div className="grid grid-cols-2 gap-2 ">
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Marti :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className=" py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      %
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Reset Marti If :
                    </div>
                    <input
                      type="text"
                      placeholder="0"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Win
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Reset Win :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      On Trade
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Reset Win :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      On Profit
                    </div>
                  </div>
                </div>
                <div className="w-full bg-red-700 text-primary text-center text-[14px]">
                  On LOSE
                </div>
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Marti :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className=" py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      %
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Reset Marti If :
                    </div>
                    <input
                      type="text"
                      placeholder="0"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Lose
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Reset Trade After :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Lose
                    </div>
                  </div>
                  <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      Reset Lose :
                    </div>
                    <input
                      type="text"
                      placeholder="0.00000000"
                      className="w-full h-full focus:outline-none p-[0.3rem]"
                    />
                    <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                      On Trade
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
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
        <div className="w-full p-[1rem] overflow-y-auto  min-h-[35vh]  max-h-[35vh]">
          <table className="border border-primary border-collapse w-full border-warning table-sm text-center">
            <thead className="text-primary">
              <tr>
                <th className="border border-primary">H/L</th>
                <th className="border border-primary px-[2rem]">TRADE</th>
                <th className="border border-primary px-[2rem]">PROFIT</th>
              </tr>
            </thead>
            <tbody className="text-primary">
              <tr>
                <td className="border border-primary ">&nbsp;</td>
                <td className="border border-primary ">&nbsp;</td>
                <td className="border border-primary ">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full p-[1rem] text-primary flex space-x-4">
          <div className="w-full flex flex-col items-center justify-center space-y-2">
            <div className="flex w-full space-x-2">
              <button
                type="button"
                className="w-full border border-primary rounded-[0.3rem]"
              >
                START
              </button>
              <button
                type="button"
                className="w-full border border-primary rounded-[0.3rem]"
              >
                STOP
              </button>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 p-[0.25rem] border border-primary w-full rounded-[0.3rem]"
              >
                <span>
                  <IoReload size={20} />
                </span>
                <div className="">RESET</div>
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-2">
            <div className="flex w-full space-x-2">
              <button
                type="button"
                className="w-full border border-primary rounded-[0.3rem]"
              >
                SHOOT
              </button>
              <button
                type="button"
                className="w-full border border-primary rounded-[0.3rem]"
              >
                BOOM
              </button>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 p-[0.25rem] border border-primary w-full rounded-[0.3rem]"
              >
                <span>
                  <IoStopCircleOutline size={20} />
                </span>
                <div className="">STOP ON WIN</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
