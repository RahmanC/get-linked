import { policy } from "@/mock/data";
import React from "react";
import Button from "./Button";

const Privacy = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-5 md:gap-24 items-center justify-center  border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-[5rem] py-[1.8125rem] md:py-[3.875rem]">
      <div className="flex flex-col items-center md:items-start md:w-[28.25rem]">
        <p className="flex flex-col items-center md:items-start text-[1.25rem] md:text-[2rem] font-[700]">
          Privacy Policy and <span className="text-[#D434FE]">Terms</span>
        </p>
        <p className="text-[0.75rem] md:text-[0.875rem] text-center md:text-start my-1 md:my-4  font-[400] opacity-75">
          Last updated on September 12, 2023
        </p>

        <p className="text-[0.75rem] md:text-[0.875rem] text-center md:text-start my-3 md:my-4  font-[400] w-[18.0625rem] md:w-[27.375rem]">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>

        <div className="rounded-[5px] border border-[#D434FE] px-3 py-11 md:px-[4.5rem] md:py-[3.69rem] text-xs md:text-sm font-[400] md:mt-[4.3125rem] ">
          <p className="  md:w-[26.5625rem] text-center md:text-start">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className="text-[#D434FE] text-base font-[700] mt-6">
            Licensing Policy
          </p>
          <p>Here are terms of our Standard License:</p>
          <div className="flex flex-col gap-[1.125rem] my-[1.125rem]">
            {policy.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 md:w-[28.375rem]"
                >
                  <img src="/check.svg" alt="check" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-[1.125rem]">
            <Button label="Read More" link="/" />
          </div>
        </div>
      </div>

      <div>
        <img src="./privacy.svg" alt="patner" />
      </div>
    </section>
  );
};

export default Privacy;
