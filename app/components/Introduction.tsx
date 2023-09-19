import React from "react";

const Introduction = () => {
  return (
    <section className="flex flex-col gap-24 md:flex-row items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-auto py-[1.8125rem] md:py-[3.875rem]">
      <img src="/big-idea.svg" alt="getLinked" />
      <div>
        <p className="flex flex-col items-center md:items-start text-[1.25rem] md:text-[2rem] font-[700]">
          Introduction to getlinked{" "}
          <span className="text-[#D434FE]">tech Hackathon 1.0</span>
        </p>
        <p className="md:text-[0.875rem] text-[0.8125rem] text-center md:text-left  mt-4 md:w-[33rem]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>
  );
};

export default Introduction;
