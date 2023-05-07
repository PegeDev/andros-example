import Image from "next/image";
import React from "react";
import DogeLogo from "../../public/assets/images/doge.png";
import TrxLogo from "../../public/assets/images/trx.png";
import UsdtLogo from "../../public/assets/images/usdt.png";

function Trophy() {
  return (
    <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
      <div className="w-full bg-primary text-center text-[14px] inline-flex items-center justify-center space-x-2">
        <span>Werage Doge</span>
        <span>
          <Image
            loading="lazy"
            src={DogeLogo}
            alt="logo"
            width={25}
            height={25}
          />
        </span>
      </div>
      <div className="w-full">
        <table className="border border-primary border-collapse w-full text-center text-[0.75rem]">
          <thead className="text-primary">
            <tr>
              <th className="border border-primary p-[0.25rem]">Username</th>
              <th className="border border-primary p-[0.25rem]">Werage</th>
              <th className="border border-primary p-[0.25rem]">Reward</th>
            </tr>
          </thead>
          <tbody className="text-primary">
            <tr>
              <td className="border border-primary p-[0.25rem]">warlan</td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-between">
                  <span>11222.91770157</span>
                  <span>
                    <Image
                      loading="lazy"
                      src={DogeLogo}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </span>
                </div>
              </td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-between">
                  <span>164.33</span>
                  <span>
                    <Image
                      loading="lazy"
                      src={DogeLogo}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full bg-primary text-center text-[14px] inline-flex items-center justify-center space-x-2">
        <span>Total Profit</span>
        <span>
          <Image
            loading="lazy"
            src={UsdtLogo}
            alt="logo"
            width={25}
            height={25}
          />
        </span>
      </div>
      <div className="w-full">
        <table className="border border-primary border-collapse w-full text-center text-[0.75rem]">
          <thead className="text-primary">
            <tr>
              <th className="border border-primary p-[0.25rem]">Username</th>
              <th className="border border-primary p-[0.25rem]">Profit</th>
              <th className="border border-primary p-[0.25rem]">Reward</th>
            </tr>
          </thead>
          <tbody className="text-primary">
            <tr>
              <td className="border border-primary p-[0.25rem]">bali123</td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-between">
                  <span>964.69647888</span>
                  <span>
                    <Image
                      loading="lazy"
                      src={UsdtLogo}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </span>
                </div>
              </td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-between">
                  <span>164.33</span>
                  <span>
                    <Image
                      loading="lazy"
                      src={DogeLogo}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full bg-primary text-center text-[14px] inline-flex items-center justify-center space-x-2">
        <span>Werage TRX</span>
        <span>
          <Image
            loading="lazy"
            src={TrxLogo}
            alt="logo"
            width={25}
            height={25}
          />
        </span>
      </div>
      <div className="w-full">
        <table className="border border-primary border-collapse w-full text-center text-[0.75rem]">
          <thead className="text-primary">
            <tr>
              <th className="border border-primary p-[0.25rem]">Username</th>
              <th className="border border-primary p-[0.25rem]">Werage</th>
              <th className="border border-primary p-[0.25rem]">Reward</th>
            </tr>
          </thead>
          <tbody className="text-primary">
            <tr>
              <td className="border border-primary p-[0.25rem]">bali123</td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-between">
                  <span>64208.49837395</span>
                  <span>
                    <Image
                      loading="lazy"
                      src={TrxLogo}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </span>
                </div>
              </td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-between">
                  <span>347.81</span>
                  <span>
                    <Image
                      loading="lazy"
                      src={TrxLogo}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full bg-primary text-center text-[14px] inline-flex items-center justify-center space-x-2">
        <span>Active User</span>
        <span>
          <Image
            loading="lazy"
            src={TrxLogo}
            alt="logo"
            width={25}
            height={25}
          />
        </span>
      </div>
      <div className="w-full">
        <table className="border border-primary border-collapse w-full text-center text-[0.75rem]">
          <thead className="text-primary">
            <tr>
              <th className="border border-primary p-[0.25rem]">Username</th>
              <th className="border border-primary p-[0.25rem]">Point</th>
              <th className="border border-primary p-[0.25rem]">Reward</th>
            </tr>
          </thead>
          <tbody className="text-primary">
            <tr>
              <td className="border border-primary p-[0.25rem]">bali123</td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-center">58</div>
              </td>
              <td className="border border-primary p-[0.25rem]">
                <div className="flex items-center justify-between">
                  <span>347.81</span>
                  <span>
                    <Image
                      loading="lazy"
                      src={TrxLogo}
                      alt="logo"
                      height={20}
                      width={20}
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trophy;
