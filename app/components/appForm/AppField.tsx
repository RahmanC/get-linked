"use client";

import { AppFieldProps } from "@/types/types";
import React, { FC } from "react";

export const AppField: FC<AppFieldProps> = ({
  value,
  name,
  placeholder,
  type,
  setText,
  textArea,
}) => {
  switch (textArea) {
    case true:
      return (
        <textarea
          className={`form-control w-[100%] py-3 px-7 border border-[#ffffff] outline-none flex gap-[1.2rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]   bg-inherit rounded-[4px] text-[#ffffff] text-base h-[7.4375rem]`}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}
          required
        />
      );
    default:
      return (
        <input
          className={`form-control w-[100%] py-3 px-7 border border-[#ffffff] outline-none flex gap-[1.2rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]   bg-inherit rounded-[4px] text-[#ffffff] text-base`}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}
          required
        />
      );
  }
};
