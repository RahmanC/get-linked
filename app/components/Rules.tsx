import Image from "next/image";
import React from "react";

const Rules = () => {
  return (
    <section className="relative flex flex-1 justify-center items-center bg-[#150E28] border-b border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-[11.5rem] py-[1.8125rem] md:py-[3.875rem]">
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute top-0 left-[-10%] opacity-[58%] "
      />
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute hidden md:block bottom-[-40%] right-[-40%]   opacity-[30%]"
      />
      <div className="z-20 flex flex-col-reverse gap-5 md:gap-24 md:flex-row items-center justify-center">
        <div className="md:pl-[3rem] relative">
          <img
            src="/star-gray.svg"
            alt="star"
            className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] top-[15%] md:top-[-15%] right-4 md:right-[30%] animate-ping-slow"
          />

          <p className="flex flex-col items-center md:items-start text-[1.25rem] md:text-[2rem] font-[700] ">
            Rules and <span className="text-[#D434FE]">Guidelines</span>
          </p>
          <p className="md:text-[0.875rem] text-[0.8125rem] text-center md:text-left  mt-4 md:w-[33rem]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <img
          src="/star-white.svg"
          alt="star"
          className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] bottom-2 md:bottom-[30%] left-[25%] md:left-[50%] animate-ping-slow"
        />
        <img
          src="/star-white.svg"
          alt="star"
          className="absolute md:hidden w-[8px] h-[10px]  top-[28%] left-[16%]  animate-ping-slow"
        />
        <img src="/guidelines.svg" alt="getLinked" />
      </div>
    </section>
  );
};

export default Rules;
