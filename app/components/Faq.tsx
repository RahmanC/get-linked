"use client";
import { faqMock } from "@/mock/data";
import React, { useState } from "react";
import { Criteria } from "@/types/types";
import FaqItem from "./FaqItem";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(-1);

  const switchFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative flex flex-col gap-5 md:gap-24 md:flex-row items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-[5rem] py-[1.8125rem] md:py-[3.875rem]"
    >
      <img
        src="/star-dark.svg"
        alt="star"
        className="absolute w-[8px] h-[10px] md:w-[26px] md:h-[32px] top-[3%] md:top-[3%] left-[15%] md:left-[5%] animate-ping-slow"
      />
      <img
        src="/question.svg"
        alt="star"
        className="absolute w-[192px] h-[52px] md:w-auto md:h-auto top-[66%] md:top-[3%] right-[35%] md:right-[15%] animate-bounce"
      />
      <div className="flex flex-col items-center md:items-start">
        <p className="flex flex-col items-center md:items-start text-[1.25rem] md:text-[2rem] font-[700]">
          Frequently Ask <span className="text-[#D434FE]">Question</span>
        </p>
        <p className="md:text-[0.875rem] text-[0.8125rem] text-center md:text-left  mt-4 md:w-[33rem]">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className="flex items-start flex-col gap-y-8 mt-8">
          {faqMock.map((faq: Criteria, index: number) => (
            <FaqItem
              switchFaq={() => switchFaq(index)}
              active={activeFaq === index}
              key={index}
              label={faq.label}
              value={faq.value}
            />
          ))}
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="/faq2.svg" alt="getLinked" />
      </div>
    </section>
  );
};

export default Faq;
