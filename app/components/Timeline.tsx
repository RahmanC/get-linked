"use client";

import { useState } from "react";

import { timelineMock } from "@/mock/data";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className=" flex flex-col gap-5 md:gap-24 md:flex-row items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-auto py-[1.8125rem] md:py-[3.875rem]">
      <div>
        <div className="flex flex-col items-center text-center mb-[5.6875rem] gap-3">
          <p className="text-[2rem] font-[700]">Timeline</p>
          <p className="text-[0.875rem] font-[400] flex flex-col">
            Here is the breakdown of the time we anticipate{" "}
            <span>using for the upcoming event.</span>
          </p>
        </div>
        {timelineMock.map((item, index) => {
          const even = index % 2 === 0;

          return (
            <div className="flex gap-4 md:block">
              <div key={index} className=" flex flex-col  items-center">
                <div className=" w-1 bg-[#D434FE] h-[77px] md:h-[86px] my-3"></div>
                <div className="flex items-center justify-center text-[#ffffff] text-[0.75rem] md:text-[1.5rem] font-[700] w-[1.2075rem] h-[1.2075rem] md:w-[3.3125rem] md:h-[3.3125rem] rounded-full bg-[#D434FE]">
                  {index + 1}
                </div>
              </div>

              <div
                key={index}
                className={`flex flex-col justify-between gap-[2.5rem] md:gap-[7rem] text-[0.75rem]  md:w-full  ${
                  even ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex flex-col justify-between text-start gap-2 md:w-1/2 md:gap-3 ${
                    even ? "md:text-end" : "md:text-start"
                  }`}
                >
                  <p className="font-[700] md:text-[1.5rem] text-[#D434FE]">
                    {item.label}
                  </p>
                  <p className="font-[400] md:text-[0.875rem] text-[#ffffff]">
                    {item.value}
                  </p>
                  <p className="md:hidden font-[700] md:text-[1.5rem] text-[#D434FE]">
                    {item.date}
                  </p>
                </div>
                <div
                  className={`hidden md:block text-start md:w-1/2 ${
                    even ? "md:text-start" : "md:text-end"
                  }`}
                >
                  <p className="font-[700] md:text-[1.5rem] text-[#D434FE]">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
