import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import { useState } from "react";

function Modal({ title, message, setModal }) {
  const [bgClicked, setBgClicked] = useState(false);
  const handleBgClicked = () => {
    setBgClicked(true);
    setTimeout(() => {
      setBgClicked(false);
    }, [250]);
  };
  console.log({ bgClicked });
  return (
    <>
      <div
        onClick={() => handleBgClicked()}
        className="absolute backdrop-blur-[4px] bg-black/50 w-full h-screen z-10 "
      />
      <div
        className={`absolute z-50 max-w-[33.75rem] w-full px-8 flex items-center justify-center ${
          bgClicked && "scale-105"
        } transition-all ease-in-out duration-200`}
      >
        <div className="w-full bg-[#181616] py-4 px-2 rounded-[0.625rem] flex flex-col items-center justify-center space-y-2  border border-primary ">
          <div className="">
            <Image src={Logo} alt="logo" height={100} width={100} />
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="w-full text-center capitalize text-primary font-bold text-[1rem]">
              {title ? title : ""}
            </h3>
            <p className="w-full text-center text-primary text-[0.8rem]">
              {message ? message : ""}
            </p>
          </div>
          <button
            onClick={() => setModal(false)}
            className="hover:bg-primary hover:text-black transition-all ease-linear duration-300  px-2 py-1 w-full block items-center justify-center rounded-[0.25rem] text-[0.8rem] border border-primary text-primary"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
