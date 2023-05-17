"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/assets/images/logo.png";
import { BsShieldLock } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
export default function Page() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [bgClicked, setBgClicked] = useState(false);
  const [modal, setModal] = useState(false);

  const handleBgClicked = () => {
    setBgClicked(true);
    setTimeout(() => {
      setBgClicked(false);
    }, [250]);
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
            <div
              onClick={handleBgClicked}
              className="absolute backdrop-blur-[4px] bg-black/50 w-full h-screen z-10 "
            />
            <div
              className={`absolute z-50 max-w-[33.75rem] w-full  flex items-center justify-center  ${
                bgClicked && "scale-105"
              } transition-all ease-in-out duration-200`}
            >
              <div className="relative w-full bg-[#181616] py-6 px-3 rounded-[0.625rem] flex flex-col items-center justify-center space-y-4 border border-primary">
                <button
                  onClick={() => setModal(false)}
                  className="absolute top-0 right-0 m-5 w-10 h-10 text-center rounded-full hover:bg-white/20 text-white inline-flex items-center justify-center transition ease-in duration-300"
                >
                  <IoClose size={25} />
                </button>
                <div className="">
                  <Image src={Logo} alt="logo" height={100} width={100} />
                </div>
                <div className="w-full border border-primary flex items-center justify-center text-[14px] rounded-[0.25rem] overflow-hidden">
                  <label className="whitespace-nowrap px-[8px] py-[4px] text-primary uppercase text-[14px]">
                    Email :
                  </label>
                  <input
                    type="text"
                    className="w-full px-[8px] py-[4px] focus:outline-none text-[14px]"
                    placeholder="email@example.com"
                  />
                </div>
                <button className="hover:bg-primary hover:text-black transition-all ease-linear duration-300  px-2 py-1 w-full block items-center justify-center rounded-[0.25rem] text-[0.8rem] border border-primary text-primary">
                  RESET PASSWORD
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-[0.5rem] ">
        <div className="flex items-center justify-center mx-auto w-full h-full max-w-[33.75rem] select-none  ">
          <div className="flex items-center justify-center space-x-4 w-full">
            <div className="w-1/2">
              <Image
                src={Logo}
                alt="Logo"
                height={150}
                width={150}
                loading="lazy"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-6">
              <h3 className="block text-primary w-full text-[1.7rem] font-semibold text-center whitespace-nowrap">
                Andros Login - Register
              </h3>
              <div className="w-full flex flex-col items-center justify-center space-y-4 px-[0.75rem]">
                <div className="w-full flex justify-between space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setLogin(!login);
                      setRegister(false);
                    }}
                    className={`w-full border border-primary px-[8px] py-[4px] uppercase rounded-[0.25rem] text-[0.75rem] transition-all ease-linear duration-300 ${
                      login
                        ? "bg-primary text-black shadow-[0px_0px_0px_0.25rem_rgba(255,193,7,0.5)]"
                        : "text-primary"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRegister(!register);
                      setLogin(false);
                    }}
                    className={`w-full border border-primary px-[8px] py-[4px] uppercase rounded-[0.25rem] text-[0.75rem] transition-all ease-linear duration-300 ${
                      register
                        ? "bg-primary text-black shadow-[0px_0px_0px_0.25rem_rgba(255,193,7,0.5)]"
                        : "text-primary"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {login && (
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
                    className="overflow-hidden w-full "
                  >
                    <div className="border border-primary p-[0.3rem] rounded-[0.25rem] space-y-2">
                      <div className="border border-primary flex items-center justify-center text-[14px] rounded-[0.25rem] overflow-hidden">
                        <label className="w-44 px-[8px] py-[4px] text-primary uppercase text-[14px]">
                          Username :
                        </label>
                        <input
                          type="text"
                          className="w-full px-[8px] py-[4px] focus:outline-none text-[14px]"
                          placeholder="USERNAME / EMAIL"
                        />
                      </div>
                      <div className="border border-primary flex items-center justify-center text-[14px] rounded-[0.25rem] overflow-hidden">
                        <label className="w-44 px-[8px] py-[4px] text-primary uppercase text-[14px]">
                          Password :
                        </label>
                        <input
                          type="password"
                          className="w-full px-[8px] py-[4px] focus:outline-none text-[14px]"
                          placeholder="**********"
                        />
                      </div>
                      <button
                        onClick={() => setModal(true)}
                        className="inline-flex items-center justify-center py-[0.5rem] text-primary text-[14px] italic uppercase space-x-1"
                      >
                        <span>
                          <BsShieldLock />
                        </span>
                        <span>Reset Password</span>
                      </button>
                      <button className="block w-full border border-primary text-primary rounded-[0.25rem] text-[14px] uppercase px-[8px] py-[4px]">
                        <a href="/">Login Now</a>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {register && (
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
                    className="overflow-hidden w-full "
                  >
                    <div className="border border-primary p-[0.3rem] rounded-[0.25rem] space-y-2">
                      <div className="border border-primary flex items-center justify-center text-[14px] rounded-[0.25rem] overflow-hidden">
                        <label className="w-44 px-[8px] py-[4px] text-primary uppercase text-[14px]">
                          Username :
                        </label>
                        <input
                          type="text"
                          className="w-full px-[8px] py-[4px] focus:outline-none text-[14px]"
                          placeholder="USERNAME / EMAIL"
                        />
                      </div>
                      <div className="border border-primary flex items-center justify-center text-[14px] rounded-[0.25rem] overflow-hidden">
                        <label className="w-44 px-[8px] py-[4px] text-primary uppercase text-[14px]">
                          Email :
                        </label>
                        <input
                          type="email"
                          className="w-full px-[8px] py-[4px] focus:outline-none text-[14px]"
                          placeholder="EMAIL@gmail.com"
                        />
                      </div>
                      <div className="border border-primary flex items-center justify-center text-[14px] rounded-[0.25rem] overflow-hidden">
                        <label className="w-44 px-[8px] py-[4px] text-primary uppercase text-[14px]">
                          Password :
                        </label>
                        <input
                          type="password"
                          className="w-full px-[8px] py-[4px] focus:outline-none text-[14px]"
                          placeholder="**********"
                        />
                      </div>
                      <div className="border border-primary flex items-center justify-center text-[14px] rounded-[0.25rem] overflow-hidden">
                        <label className="w-44 px-[8px] py-[4px] text-primary uppercase text-[14px]">
                          Re-Password :
                        </label>
                        <input
                          type="password"
                          className="w-full px-[8px] py-[4px] focus:outline-none text-[14px]"
                          placeholder="**********"
                        />
                      </div>

                      {/* <div className="w-full h-full inline-flex items-center justify-center">
                        <div id="cp2">
                          <div className="w-full">
                            <div>
                              <iframe
                                title="reCAPTCHA"
                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcUx-QfAAAAAHT7yebrNk9XnhIFqKdAUpChBZiO&amp;co=aHR0cHM6Ly9jcnlwdG8taW5jLmlvOjQ0Mw..&amp;hl=id&amp;v=4q6CtudrwcI-LSEYlfoEbDXg&amp;theme=dark&amp;size=normal&amp;cb=55ky6ylw328o"
                                width="304"
                                height="78"
                                role="presentation"
                                name="a-ar96hh697ktj"
                                frameborder="0"
                                scrolling="no"
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                              ></iframe>
                            </div>
                            <textarea
                              id="g-recaptcha-response"
                              name="g-recaptcha-response"
                              className="g-recaptcha-response "
                              style={{
                                width: "250px",
                                height: "40px",
                                border: "1px solid rgb(193, 193, 193)",
                                margin: "10px 25px",
                                padding: "0px",
                                resize: "none",
                                display: "none",
                              }}
                            ></textarea>
                          </div>
                        </div>
                      </div> */}
                      <button className="block w-full border border-primary text-primary rounded-[0.25rem] text-[14px] uppercase px-[8px] py-[4px]">
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
