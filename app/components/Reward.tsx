import React from "react";

const Reward = () => {
  return (
    <section className="relative flex flex-col gap-5 md:gap-24 items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-[5rem] py-[1.8125rem] md:py-[3.875rem]">
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute top-[30%] left-[-15%] object-cover opacity-[30%]  "
      />
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute bottom-[-50%] right-[-30%] opacity-[28%]  "
      />
      <img
        src="/star-dark.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] top-[22%] md:top-[14%] left-[23%] md:left-[20%] "
      />
      <img
        src="/star-dark.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] top-[22%] md:top-[19%] right-[23%] md:right-[9%] "
      />
      <img
        src="/star-white.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] top-[56%] md:top-[35%] right-[18%] md:right-[47%] "
      />
      <img
        src="/star-white.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] top-[56%] md:top-[43%] right-[18%] md:right-[5%] "
      />
      <img
        src="/star-white.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] bottom-[3%] md:bottom-[2%] right-[3%] md:right-[25%] "
      />
      <img
        src="/star-white.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] bottom-[3%] md:bottom-[4%] left-[3%] md:left-[15%] "
      />
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
