import React from "react";

const Partners = () => {
  return (
    <section className=" flex flex-col gap-5 md:gap-24 items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-[5rem] py-[1.8125rem] md:py-[3.875rem]">
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
