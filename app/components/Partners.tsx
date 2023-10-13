import React from "react";

const Partners = () => {
  return (
    <section className="relative flex flex-col gap-5 md:gap-24 items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-[5rem] py-[1.8125rem] md:py-[3.875rem]">
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute top-[-20%] left-[-15%] object-cover opacity-[30%]  "
      />
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute hidden md:block bottom-[-50%] right-[-30%] opacity-[28%]  "
      />
      <img
        src="/star-dark.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] top-[40%] md:top-[25%] left-[16%] md:left-[16%] "
      />
      <img
        src="/star-dark.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] top-[52%] md:top-[42%] right-[42%] md:right-[42%] "
      />
      <img
        src="/star-white.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[10px] md:h-[16px] top-[80%] md:top-[80%] right-[42%] md:right-[42%] animate-ping-slow"
      />
      <div className="flex flex-col items-center md:w-[28.25rem]">
        <p className=" text-[1.25rem] md:text-[2rem] font-[700]">
          Partners and Sponsors
        </p>
        <p className="text-[0.75rem] md:text-[0.875rem] text-center my-1 md:my-4  font-[400]">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>

      <div>
        <img src="./partner.svg" alt="patner" />
      </div>
    </section>
  );
};

export default Partners;
