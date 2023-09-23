"use client";

import { timelineMock } from "@/mock/data";

const Timeline = () => {
  return (
    <section className="relative flex flex-col gap-5 md:gap-24 md:flex-row items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-auto py-[1.8125rem] md:py-[3.875rem]">
      <img
        src="/star-dark.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] top-[22%] md:top-[14%] left-[23%] md:left-[20%] animate-ping-slow"
      />
      <img
        src="/star-white.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] top-[56%] md:top-[49%] right-[18%] md:right-[13%] animate-ping-slow"
      />
      <img
        src="/star-gray.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] bottom-[3%] md:bottom-[6%] left-[3%] md:left-[10%] animate-ping-slow"
      />
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
                <div className="md:hidden flex items-center justify-center text-[#ffffff] text-[0.75rem] md:text-[1.5rem] font-[700] w-[1.2075rem] h-[1.2075rem] md:w-[3.3125rem] md:h-[3.3125rem] rounded-full bg-[#D434FE]">
                  {index + 1}
                </div>
              </div>

              <div
                key={index}
                className={`flex flex-col justify-between items-center gap-[2.5rem] md:gap-[7rem] text-[0.75rem]  md:w-full  ${
                  even ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex flex-col justify-between text-start gap-2 md:w-[40%] md:gap-3  ${
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
                <div className="hidden md:flex items-center justify-center text-[#ffffff] text-[0.75rem] md:text-[1.5rem] font-[700] w-[1.2075rem] h-[1.2075rem] md:w-[3.3125rem] md:h-[3.3125rem] rounded-full bg-[#D434FE]">
                  {index + 1}
                </div>
                <div
                  className={`hidden md:block text-start md:w-[40%] ${
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
