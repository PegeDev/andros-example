import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DogeLogo from "../../public/assets/images/doge.png";
import TrxLogo from "../../public/assets/images/trx.png";

import {
  BsClockHistory,
  BsCurrencyExchange,
  BsDownload,
  BsPower,
  BsShieldLock,
} from "react-icons/bs";
import { useEffect, useState } from "react";

function Profile({ setCoin, coin }) {
  const [btnSwap, setBtnSwap] = useState(false);
  const [btnHDepo, setBtnHDepo] = useState(false);
  const [btnHCode, setBtnHCode] = useState(false);
  const [btnHWd, setBtnHWd] = useState(false);
  const [btnChangePass, setBtnChangePass] = useState(false);
  const [swapCoin1, setSwapCoin1] = useState("doge");
  const [swapCoin2, setSwapCoin2] = useState("trx");

  const handleSwap1 = (value) => {
    setSwapCoin1(value);
    if (value === "doge") {
      return setSwapCoin2("trx");
    } else {
      return setSwapCoin2("doge");
    }
  };
  const handleSwap2 = (value) => {
    setSwapCoin2(value);
    if (value === "doge") {
      return setSwapCoin1("trx");
    } else {
      return setSwapCoin1("doge");
    }
  };

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

  useEffect(() => {
    if (swapCoin1 === "doge") return setSwapCoin2("trx");
    if (swapCoin1 === "trx") return setSwapCoin2("doge");
    if (swapCoin2 === "doge") return setSwapCoin1("trx");
    if (swapCoin2 === "trx") return setSwapCoin1("doge");
  }, [swapCoin1, swapCoin2]);

  return (
    <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
      <div className="w-full border border-primary  text-[0.875rem] flex items-center rounded-[0.25rem] overflow-hidden">
        <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
          Coin Use :
        </div>
        <select
          onChange={(e) => setCoin(e.target.value.toLowerCase())}
          value={coin}
          className="text-center p-[0.3rem] w-full text-[14px] text-primary border-x border-primary bg-transparent  appearance-none focus:outline-none peer uppercase"
        >
          <option
            className="text-primary bg-black"
            selected={coin === "doge"}
            value="doge"
          >
            Doge
          </option>
          <option
            selected={coin === "trx"}
            className="text-primary bg-black"
            value="trx"
          >
            Trx
          </option>
        </select>
        <div className="py-[4px] px-[8px]  ">
          <CoinsUseLogo />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <table className="w-full text-primary text-[14px]">
          <tbody>
            <tr>
              <th className="text-left font-medium">Username </th>
              <td>: </td>
              <td>Pegedev</td>
            </tr>
            <tr>
              <th className="text-left font-medium">ID </th>
              <td>: </td>
              <td>101593</td>
            </tr>
            <tr>
              <th className="text-left font-medium">Email </th>
              <td>: </td>
              <td>pege.dev7878@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={() => setBtnSwap(!btnSwap)}
        className={`w-full border border-primary text-[14px] inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] transition ease-linear duration-300 ${
          btnSwap ? "text-black bg-primary" : "text-primary"
        }`}
      >
        <BsCurrencyExchange size={20} />
        <span>Swap Coin</span>
      </button>

      <AnimatePresence>
        {btnSwap && (
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
            <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2 text-[14px]">
              <div className="w-full grid sm:grid-cols-2 gap-2">
                <div className="w-full flex items-center justify-center border border-primary rounded-[0.25rem]">
                  <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                    From :
                  </div>
                  <select
                    onChange={(e) => handleSwap1(e.target.value.toLowerCase())}
                    value={swapCoin1}
                    className="text-center p-[0.3rem] w-full text-[14px] text-primary border-x border-primary bg-transparent  appearance-none focus:outline-none peer uppercase"
                  >
                    <option className="text-primary bg-black" value="doge">
                      Doge
                    </option>
                    <option className="text-primary bg-black" value="trx">
                      Trx
                    </option>
                  </select>
                  <div className="py-[4px] px-[8px]  ">
                    {swapCoin1 === "doge" ? (
                      <Image
                        loading="lazy"
                        src={DogeLogo}
                        alt="logo"
                        width={25}
                        height={25}
                      />
                    ) : (
                      <Image
                        loading="lazy"
                        src={TrxLogo}
                        alt="logo"
                        width={25}
                        height={25}
                      />
                    )}
                  </div>
                </div>
                <div className="w-full flex items-center justify-center border border-primary rounded-[0.25rem]">
                  <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                    To :
                  </div>
                  <select
                    onChange={(e) => handleSwap2(e.target.value.toLowerCase())}
                    value={swapCoin2}
                    className="text-center p-[0.3rem] w-full text-[14px] text-primary border-x border-primary bg-transparent  appearance-none focus:outline-none peer uppercase"
                  >
                    <option className="text-primary bg-black" value="doge">
                      Doge
                    </option>
                    <option className="text-primary bg-black" value="trx">
                      Trx
                    </option>
                  </select>
                  <div className="py-[4px] px-[8px]  ">
                    {swapCoin2 === "doge" ? (
                      <Image
                        loading="lazy"
                        src={DogeLogo}
                        alt="logo"
                        width={25}
                        height={25}
                      />
                    ) : (
                      <Image
                        loading="lazy"
                        src={TrxLogo}
                        alt="logo"
                        width={25}
                        height={25}
                      />
                    )}
                  </div>
                </div>
                <div className="w-full flex items-center justify-center border border-primary rounded-[0.25rem] overflow-hidden">
                  <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                    Amount :
                  </div>
                  <input
                    type="text"
                    placeholder="0"
                    className="w-full h-full focus:outline-none text-center py-[4px] px-[8px] text-[14px]"
                  />
                </div>
                <div className="w-full flex items-center justify-center border border-primary rounded-[0.25rem] overflow-hidden">
                  <div className="py-[4px] px-[8px] text-center whitespace-nowrap text-primary ">
                    Estimate Receive :
                  </div>
                  <input
                    type="text"
                    disabled
                    placeholder="0"
                    className="w-full h-full focus:outline-none text-center py-[4px] px-[8px] text-[14px] disabled:bg-white"
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full border border-primary text-[14px] text-primary inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] transition ease-linear duration-300"
              >
                <BsCurrencyExchange size={20} />
                <span>Swap Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setBtnHDepo(!btnHDepo);
          setBtnHCode(false);
          setBtnHWd(false);
        }}
        className={`w-full border border-primary text-[14px] inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] transition ease-linear duration-300 ${
          btnHDepo ? "text-black bg-primary" : "text-primary"
        }`}
      >
        <BsClockHistory size={20} />
        <span>H. Deposit</span>
      </button>

      <div className="w-full grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => {
            setBtnHDepo(false);
            setBtnHCode(!btnHCode);
            setBtnHWd(false);
          }}
          className={`w-full border border-primary text-[14px] inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] transition ease-linear duration-300 ${
            btnHCode ? "text-black bg-primary" : "text-primary"
          }`}
        >
          <BsClockHistory size={20} />
          <span>H. Code</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setBtnHDepo(false);
            setBtnHCode(false);
            setBtnHWd(!btnHWd);
          }}
          className={`w-full border border-primary text-[14px] inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] transition ease-linear duration-300 ${
            btnHWd ? "text-black bg-primary" : "text-primary"
          }`}
        >
          <BsClockHistory size={20} />
          <span>H. Withdraw</span>
        </button>
      </div>
      <AnimatePresence>
        {btnHDepo && (
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
            <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2 text-[14px]">
              <div className="w-full">
                <table className="border border-primary border-collapse w-full border-warning table-sm text-center">
                  <thead className="text-primary">
                    <tr>
                      <th className="border border-primary px-[4px]">TxID</th>
                      <th className="border border-primary px-[4px]">Amount</th>
                      <th className="border border-primary px-[4px]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-primary">
                    <tr>
                      <td className=" ">&nbsp;</td>
                      <td className=" ">&nbsp;</td>
                      <td className=" ">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {btnHCode && (
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
            <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2 text-[14px]">
              <div className="w-full">
                <table className="border border-primary border-collapse w-full border-warning table-sm text-center">
                  <thead className="text-primary">
                    <tr>
                      <th className="border border-primary px-[4px]">Amount</th>
                      <th className="border border-primary px-[4px]">Code</th>
                      <th className="border border-primary px-[4px]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-primary">
                    <tr>
                      <td className=" ">&nbsp;</td>
                      <td className=" ">&nbsp;</td>
                      <td className=" ">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {btnHWd && (
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
            <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2 text-[14px]">
              <div className="w-full">
                <table className="border border-primary border-collapse w-full border-warning table-sm text-center">
                  <thead className="text-primary">
                    <tr>
                      <th className="border border-primary px-[4px]">TxID</th>
                      <th className="border border-primary px-[4px]">Amount</th>
                      <th className="border border-primary px-[4px]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-primary">
                    <tr>
                      <td className=" ">&nbsp;</td>
                      <td className=" ">&nbsp;</td>
                      <td className=" ">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setBtnChangePass(!btnChangePass)}
        className={`w-full border border-primary text-[14px] inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] transition ease-linear duration-300 ${
          btnChangePass ? "text-black bg-primary" : "text-primary"
        }`}
      >
        <BsShieldLock size={20} />
        <span>Change Password</span>
      </button>
      <AnimatePresence>
        {btnChangePass && (
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
            <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2 text-[14px]">
              <div className="w-full flex flex-col items-center justify-center space-y-2">
                <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
                  <div className="w-52 py-[4px] px-[8px] text-primary whitespace-nowrap">
                    Old Password :
                  </div>
                  <input
                    type="text"
                    placeholder="**************"
                    className="w-full h-full focus:outline-none py-[4px] px-[8px]"
                  />
                </div>
                <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
                  <div className="w-52 py-[4px] px-[8px] text-primary whitespace-nowrap">
                    New Password :
                  </div>
                  <input
                    type="text"
                    placeholder="**************"
                    className="w-full h-full focus:outline-none py-[4px] px-[8px]"
                  />
                </div>
                <div className="w-full h-full border border-primary flex items-center justify-center  rounded-[0.25rem]  text-[0.875rem]">
                  <div className="w-52 py-[4px] px-[8px] text-primary whitespace-nowrap">
                    New Re-Password :
                  </div>
                  <input
                    type="text"
                    placeholder="**************"
                    className="w-full h-full focus:outline-none py-[4px] px-[8px]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        className="w-full border border-primary text-[14px] text-primary inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] transition ease-linear duration-300"
      >
        <BsDownload size={20} />
        <span>Install Now</span>
      </button>
      <button
        type="button"
        className="w-full border border-[#dc3545] text-[14px] text-[#dc3545] inline-flex items-center justify-center space-x-1 px-[8px] py-[4px] rounded-[0.25rem] hover:bg-[#dc3545] hover:text-white transition ease-linear duration-300"
      >
        <BsPower size={20} />
        <span>Log Out</span>
      </button>
    </div>
  );
}

export default Profile;
