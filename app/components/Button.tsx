import Link from "next/link";
import React from "react";
import { Button } from "../../types/types";

const Button = ({ label, link }: Button) => {
  return (
    <Link
      href={link}
      className=" rounded-[4px] px-[3.25rem] py-[1rem] text-[1rem] font-[400]"
      style={{
        background:
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      }}
    >
      {label}
    </Link>
  );
};

export default Button;
