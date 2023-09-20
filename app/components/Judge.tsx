import React from "react";
import { Criteria } from "../../types/types";
import Button from "./Button";

const data: Criteria[] = [
  {
    label: "Innovation and Creativity",
    value:
      "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features",
  },
  {
    label: "Functionality",
    value:
      "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    label: "Impact and Relevance",
    value:
      "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    label: "Technical Complexity",
    value:
      "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    label: "Adherence to Hackathon Rules",
    value:
      "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

const Judge = () => {
  return (
    <section className="flex flex-col gap-5 md:gap-24 md:flex-row items-center justify-center border-b border-t border-[#ffffff] border-opacity-[18%] px-[2.5rem] md:px-auto py-[1.8125rem] md:py-[3.875rem]">
      <img src="/criteria.svg" alt="getLinked" />
      <div className="flex flex-col items-center md:items-start">
        <p className="flex flex-col items-center md:items-start text-[1.25rem] md:text-[2rem] font-[700]">
          Judging Criteria{" "}
          <span className="text-[#D434FE]">Key attributes</span>
        </p>
        <div className="mb-4 md:mb-[3.3475rem]">
          {data.map((item, index) => {
            return (
              <p
                key={index}
                className="md:text-[1rem] text-[0.8125rem] text-center md:text-left  mt-4 md:w-[33rem] text-[#FF26B9] font-[700]"
              >
                {item.label}:{" "}
                <span className="text-[#ffffff] md:text-[0.875rem] text-[0.75rem] text-center md:text-left font-[400]">
                  {item.value}
                </span>
              </p>
            );
          })}
        </div>
        <Button label="Read More" link="/" />
      </div>
    </section>
  );
};

export default Judge;