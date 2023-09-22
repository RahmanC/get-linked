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
  label,
  select,
  options,
  selectHolder,
}) => {
  switch (true) {
    case textArea:
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
    case select:
      return (
        <div className="flex flex-col gap-3">
          {label && (
            <label
              htmlFor={name}
              className="ms-1 text-xs md:text-sm font-[400]"
            >
              {label}
            </label>
          )}
          <select
            className={`form-control w-[100%] py-3 px-7 border border-[#ffffff] outline-none flex gap-[1.2rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]   bg-inherit rounded-[4px] text-[#ffffff] text-xs md:text-sm`}
            value={value}
            name={name}
            onChange={(e) => setText(e.target.value)}
            required
          >
            <option value="">{selectHolder}</option>
            {options &&
              options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
      );
    default:
      return (
        <div className="flex flex-col gap-3">
          {label && (
            <label
              htmlFor={name}
              className="ms-1 text-xs md:text-sm font-[400]"
            >
              {label}
            </label>
          )}
          <input
            className={`form-control w-[100%] py-3 px-7 border border-[#ffffff] outline-none flex gap-[1.2rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]   bg-inherit rounded-[4px] text-[#ffffff] text-xs md:text-sm`}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
      );
  }
};
