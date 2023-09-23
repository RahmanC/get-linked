import { FaqItem } from "@/types/types";

const FaqItem = ({ switchFaq, active, value, label }: FaqItem) => {
  return (
    <div className="border-b border-[#D434FE] w-full md:w-[26.6875rem] ">
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={switchFaq}
      >
        <span className="text-[.75rem] md:text-[.9rem]  text-white text-left">
          {label}
        </span>
        {active ? <img src="./minus.svg" /> : <img src="./plus.svg" />}
      </div>

      {active && (
        <div
          className={`mt-4 h-0 transition-all duration-500 ${
            active && "h-max py-2 md:py-3"
          } overflow-hidden`}
        >
          <p className="text-[0.65rem] md:text-[0.8rem] text-white">{value}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
