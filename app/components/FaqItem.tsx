import { FaqItem } from "@/types/types";

const FaqItem = ({ switchFaq, activeFaq, index, value, label }: FaqItem) => {
  return (
    <div className="border-b border-[#D434FE] w-full md:w-[26.6875rem] ">
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => switchFaq(index)}
      >
        <span className="text-[.75rem] md:text-[.9rem]  text-white text-left">
          {label}
        </span>
        {activeFaq === index ? (
          <img src="./minus.svg" />
        ) : (
          <img src="./plus.svg" />
        )}
      </div>

      <div
        className={`mt-4 h-0 transition-all duration-500 ${
          activeFaq === index && "h-[130px] sm:h-[120px] md:h-[120px]"
        } overflow-hidden`}
      >
        <p className="text-[.65rem] md:text-[.8rem] text-white">{value}</p>
      </div>
    </div>
  );
};

export default FaqItem;
