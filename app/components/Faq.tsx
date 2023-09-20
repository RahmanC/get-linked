"use client";
import { faqMock } from "@/mock/data";
import React, { useState } from "react";
import { Criteria } from "@/types/types";
import FaqItem from "./FaqItem";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const switchFaq = (faq: number) => {
    setActiveFaq(faq);
  };
  return (
    <section className="flex flex-col gap-5 md:gap-24 md:flex-row items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-auto py-[1.8125rem] md:py-[3.875rem]">
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
              switchFaq={(tab: number) => switchFaq(tab)}
              activeFaq={activeFaq}
              index={index}
              key={index}
              label={faq.label}
              value={faq.value}
            />
          ))}
        </div>
      </div>
      <img src="/faq.svg" alt="getLinked" />
    </section>
  );
};

export default Faq;
