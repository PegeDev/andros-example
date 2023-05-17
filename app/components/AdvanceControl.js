import React from "react";

function AdvanceControl() {
  return (
    <div className="w-full border border-primary p-[0.5rem] rounded-[0.25rem] space-y-2">
      <div className="w-full  grid sm:grid-cols-2 gap-2 ">
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
            defaultValue={"random"}
            className="text-center p-[0.3rem] w-full text-[14px] text-primary border border-primary bg-transparent  appearance-none focus:outline-none peer"
          >
            <option className="text-primary bg-black" value="random">
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

      <div className="grid sm:grid-cols-2 gap-2 ">
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
      <div className="grid sm:grid-cols-2 gap-2 ">
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
  );
}

export default AdvanceControl;
