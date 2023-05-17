"use client";
import Image from "next/image";
import Logo from "../public/assets/images/logo-ban.png";
import DogeLogo from "../public/assets/images/doge.png";
import TrxLogo from "../public/assets/images/trx.png";
import {
  IoDesktopOutline,
  IoDownloadOutline,
  IoStopCircleOutline,
  IoPersonOutline,
  IoReload,
  IoSettingsOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import BasicControl from "./components/BasicControl";
import Trophy from "./components/Trophy";
import Modal from "./components/Modal";
import ProfitSection from "./components/ProfitSection";
import AdvanceControl from "./components/AdvanceControl";
import Profile from "./components/Profile";
import Html5scanner from "./components/Html5scanner";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState("desktop");
  const [btnDesktop, setBtnDesktop] = useState(false);
  const [btnSetting, setBtnSetting] = useState(false);
  const [btnDepo, setBtnDepo] = useState(false);
  const [btnWd, setBtnWd] = useState(false);
  const [btnTrophy, setBtnTrophy] = useState(false);
  const [btnProfile, setBtnProfile] = useState(false);
  const [coin, setCoin] = useState("doge");
  const [modalScan, setModalScan] = useState(false);
  const [resultScan, setResultScan] = useState(null);
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
      name: "deposit",
      icons: <IoDownloadOutline size={20} />,
    },
    {
      name: "withdraw",
      icons: <IoDownloadOutline className="rotate-180" size={20} />,
    },
    {
      name: "trophy",
      icons: <IoTrophyOutline size={20} />,
    },
    {
      name: "profile",
      icons: <IoPersonOutline size={20} />,
    },
  ];

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

  const HandleNavigation = (name) => {
    if (name === "desktop") {
      setBtnDesktop(!btnDesktop);
      setBtnSetting(false);
      setBtnDepo(false);
      setBtnWd(false);
      setBtnTrophy(false);
      setBtnProfile(false);
      setActive(name);
    }
    if (name === "setting") {
      setBtnDesktop(false);
      setBtnSetting(!btnSetting);
      setBtnDepo(false);
      setBtnWd(false);
      setBtnTrophy(false);
      setBtnProfile(false);
      setActive(name);
    }
    if (name === "deposit") {
      setBtnDesktop(false);
      setBtnSetting(false);
      setBtnDepo(!btnDepo);
      setBtnWd(false);
      setBtnTrophy(false);
      setBtnProfile(false);
      setActive(name);
    }
    if (name === "withdraw") {
      setBtnDesktop(false);
      setBtnSetting(false);
      setBtnDepo(false);
      setBtnWd(!btnWd);
      setBtnTrophy(false);
      setBtnProfile(false);
      setActive(name);
    }
    if (name === "trophy") {
      setBtnDesktop(false);
      setBtnSetting(false);
      setBtnDepo(false);
      setBtnWd(false);
      setBtnTrophy(!btnTrophy);
      setBtnProfile(false);
      setActive(name);
    }
    if (name === "profile") {
      setBtnDesktop(false);
      setBtnSetting(false);
      setBtnDepo(false);
      setBtnWd(false);
      setBtnTrophy(false);
      setBtnProfile(!btnProfile);
      setActive(name);
    }
  };

  return (
    <>
      <AnimatePresence>
        {modal && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -100,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="fixed z-50 w-full min-h-screen flex items-center justify-center select-none  "
          >
            <Modal message={""} title={""} setModal={setModal} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modalScan && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -100,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="fixed z-50 w-full min-h-screen flex items-center justify-center select-none  "
          >
            <Html5scanner
              setModalScan={setModalScan}
              setResultScan={setResultScan}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center justify-center w-full min-h-screen p-[0.5rem]">
        <div className="flex items-center justify-center mx-auto w-full h-full max-w-[33.75rem] select-none">
          <div className="border border-primary rounded-[0.5rem] w-full divide-y divide-primary relative">
            <div className="w-full flex items-center justify-between px-[1rem]">
              <div className="w-[9.375rem] h-[3.125rem]">
                <Image
                  loading="lazy"
                  src={Logo}
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="">
                  <CoinsUseLogo />
                </span>
                <h2 className="text-primary">0.00000000</h2>
              </div>
            </div>
            <div className="p-[0.5rem] space-y-4">
              <div className="flex items-center justify-between divide-x divide-primary border border-primary rounded-[0.5rem] overflow-hidden">
                {navbarItems.map((val, index) => (
                  <button
                    key={index}
                    onClick={() => HandleNavigation(val.name)}
                    className={`relative flex items-center justify-center text-center w-full p-[0.5rem]  ${
                      active === val.name ? "text-black" : "text-primary"
                    }`}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <span className={`z-10 mix-blend-difference text-primary`}>
                      {val.icons}
                    </span>
                    <AnimatePresence>
                      {active === val.name && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute  w-full inset-0 bg-primary"
                        />
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
              <AnimatePresence>
                {btnDesktop && (
                  <motion.div
                    layout
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={{
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <BasicControl coin={coin} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {btnSetting && (
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={{
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <AdvanceControl />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {btnDepo && (
                  <motion.div
                    layout
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={{
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <Deposit
                      resultScan={resultScan}
                      setModalScan={setModalScan}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {btnWd && (
                  <motion.div
                    layout
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={{
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <Withdraw coin={coin} setModal={setModal} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {btnTrophy && (
                  <motion.div
                    layout
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={{
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <Trophy />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {btnProfile && (
                  <motion.div
                    layout
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={{
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <Profile setCoin={setCoin} coin={coin} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <ProfitSection />
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
      </div>
    </>
  );
}
