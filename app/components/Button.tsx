import Link from "next/link";
import React from "react";
import { Button } from "../types/types";

const Button = ({ label, link, customStyle, onClick }: Button) => {
  return (
    <div
      className={`group rounded-[4px] w-fit p-[0.12rem] h-fit  bg-background  overflow-hidden borde transition-all duration-500 ${customStyle}`}
    >
      {link ? (
        <Link
          href={link}
          className={` text-[1rem] text-white py-[0.9rem] p-4  font-normal  rounded-[0.25rem] transition-all duration-500 flex items-center justify-center relative before:z-20 z-0 group-hover:bg-primary `}
        >
          {label}
        </Link>
      ) : (
        <button
          className={` text-[1rem] w-full text-white py-[0.9rem] p-4  font-normal  rounded-[0.25rem] transition-all duration-500 flex items-center justify-center relative before:z-20 z-0 group-hover:bg-primary `}
          onClick={onClick}
          type="submit"
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default Button;
