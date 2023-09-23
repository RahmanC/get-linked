import React from "react";
import Button from "./Button";
import { criteriaMock } from "@/mock/data";

const Judge = () => {
  return (
    <section className="relative flex flex-col gap-5 md:gap-24 md:flex-row items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-auto py-[1.8125rem] md:py-[3.875rem]">
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute bottom-[-30%] left-[-30%] object-cover opacity-[30%]  "
      />
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute  bottom-[-70%] right-[-30%] opacity-[28%]  "
      />
      <img
        src="/star-dark.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] top-[3%] md:top-[5%] left-[45%] md:left-[13%] animate-ping-slow"
      />
      <img
        src="/star-white.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] bottom-[5%] md:bottom-[8%] left-[90%] md:left-[52%] animate-ping-slow"
      />
      <img src="/criteria.svg" alt="getLinked" />
      <div className="flex flex-col items-center md:items-start">
        <p className="flex flex-col items-center md:items-start text-[1.25rem] md:text-[2rem] font-[700]">
          Judging Criteria{" "}
          <span className="text-[#D434FE]">Key attributes</span>
        </p>
        <div className="mb-4 md:mb-[3.3475rem]">
          {criteriaMock.map((item, index) => {
            return (
              <p
                key={index}
                className="md:text-[1rem] text-[0.8125rem] text-center md:text-left  mt-4 md:w-[33rem] text-[#FF26B9] font-[700]"
              >
                {item.label}:{" "}
                <span className="text-[#ffffff] md:text-[0.875rem] text-[0.75rem] text-center md:text-left font-[400]">
                  {item.value}
                </span>
              </p>
            );
          })}
        </div>
        <Button label="Read More" link="/" />
      </div>
    </section>
  );
};

export default Judge;
