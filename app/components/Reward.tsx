import React from "react";

const Reward = () => {
  return (
    <section className=" flex flex-col gap-5 md:gap-24 items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-[5rem] py-[1.8125rem] md:py-[3.875rem]">
      <div className="flex flex-col self-end">
        <p className="flex flex-col items-center md:items-start text-[1.25rem] md:text-[2rem] font-[700]">
          Prizes and <span className="text-[#D434FE]">Rewards</span>
        </p>
        <p className="flex flex-col text-[0.75rem] text-center md:text-start my-1 md:my-4 md:text-base font-[400]">
          Highlight of the prizes or rewards for winners and{" "}
          <span>for participants.</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-[3.1875rem] md:gap-4 items-center">
        <img src="./cup.svg" alt="Award" />
        <img src="./award.svg" alt="Award" />
      </div>
    </section>
  );
};

export default Reward;
