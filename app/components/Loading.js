"use client";
import Image from "next/image";
import Logo1 from "../../public/assets/images/logo.png";
import { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [5000]);
  }, []);
  return (
    <div className="fixed  z-50 w-full min-h-screen bg-black flex items-center  justify-center">
      <div className="w-full flex flex-col items-center justify-center  max-w-[33.75rem] space-y-4">
        <Image src={Logo1} height={100} width={100} alt="logo" />
        <div className="rounded-full overflow-hidden w-[60%] h-4 bg-white/20">
          <div
            className={`${
              !loading ? "w-0" : "w-full"
            } h-full bg-gradient-to-b from-primary to-primary/20 transition-all ease-in-out duration-300`}
          />
        </div>
      </div>
    </div>
  );
}
