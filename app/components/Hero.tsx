import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <main className="relative flex flex-1 justify-center items-center min-h-max mt-[6rem] md:mt-[8%]  min-w-screen">
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute top-[-20%] left-1 opacity-[58%]  "
      />
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute top-[10%] right-[-20%] opacity-[28%] z-50 "
      />

      <div className="flex flex-col mt-[2rem]">
        <img
          src="./star-white.svg"
          alt="star"
          className="absolute w-3 h-3 md:w-7 md:h-8 top-[10%] left-[36%] md:top-[18%] md:left-[9%] animate-ping-slow"
        />
        <img
          src="./ignite.png"
          height={57}
          className="flex self-center md:self-end w-[20.25rem] md:w-[46.375rem] md:me-[3.4375rem] animate-slideLeftToRight"
        />
        <div className="z-20 flex flex-col md:flex-row mt-[2.75rem] mb-[0.5625rem] md:mb-0 md:ms-[3rem]">
          <div className="flex flex-col items-center md:items-start px-[2rem] md:w-[60%] ">
            <p className="relative flex flex-col items-center md:items-start text-[2rem] md:text-[4rem] font-[700]">
              <span className="absolute top-[-10%] md:top-[-25%] right-[2.9rem] md:right-[10.5rem]">
                {" "}
                <img
                  src="./bulb.svg"
                  className="w-[1.125rem] h-[1.625rem] md:w-[5rem] md:h-[5rem] animate-slideUpCubiBezier"
                />
              </span>
              getlinked Tech{" "}
              <span className="flex items-center md:gap-[6px]">
                <span>
                  Hackathon <span className="text-[#D434FE]">1.0</span>
                </span>
                <img
                  src="./chain.svg"
                  className="w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem]"
                />
                <img
                  src="./light.svg"
                  className="w-[2rem] h-[2rem] md:w-[5rem] md:h-[5rem] animate-slideUpEaseInOut"
                />
              </span>
            </p>
            <p className="text-center md:text-left text-[0.8125rem] md:text-[1.25rem] font-[400] mb-[2.5625rem] w-[264px] md:w-auto">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <Button label="Register" link="/register" />

            <div className="text-center">
              <div className="flex gap-4">
                <span className="relative">
                  <span className="text-[3rem] md:text-[4rem] font-[400]">
                    00
                  </span>
                  <sub className="text-[0.875rem] absolute bottom-[1.65rem] left-[3.85rem] md:bottom-[1.95rem] md:left-[4.95rem]">
                    H
                  </sub>
                </span>

                <span className="relative">
                  <span className="text-[3rem] md:text-[4rem] font-[400]">
                    00
                  </span>
                  <sub className="text-[0.875rem] absolute bottom-[1.65rem] left-[3.85rem] md:bottom-[1.95rem] md:left-[4.95rem]">
                    M
                  </sub>
                </span>

                <span className="relative">
                  <span className="text-[3rem] md:text-[4rem] font-[400]">
                    00
                  </span>
                  <sub className="text-[0.875rem] absolute bottom-[1.65rem] left-[3.85rem] md:bottom-[1.95rem] md:left-[4.95rem]">
                    S
                  </sub>
                </span>
              </div>
            </div>
          </div>
          <div className="relative md:w-[40%]">
            <img
              src="./star-gray.svg"
              alt="star"
              className="hidden  md:w-7 md:h-8 md:block absolute top-[2%] animate-ping-slow left-[2%]"
            />
            <img
              src="./star-gray.svg"
              alt="star"
              className="hidden md:w-7 md:h-8 md:block absolute bottom-[30%] left-[-72%] animate-ping-slow "
            />
            <img src="./man_hero.png" className="md:w-full animate-fadeIn" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
