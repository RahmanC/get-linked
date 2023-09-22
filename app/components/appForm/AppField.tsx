"use client";

import { AppFieldProps } from "@/types/types";
import React, { FC } from "react";
import Error from "./Error";

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
  error,
}) => {
  switch (true) {
    case textArea:
      return (
        <div className="flex flex-col gap-3">
          <textarea
            className={` form-control w-[100%] py-3 px-7 border border-[#ffffff] outline-none flex gap-[1.2rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]   bg-inherit rounded-[4px] text-[#ffffff] text-base h-[7.4375rem] ${
              error && "border-red-500"
            }`}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={(e) => setText(e.target.value)}
          />
          {error && <Error error={error} />}
        </div>
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
            className={`form-control w-[100%] py-3 px-7 border border-[#ffffff] outline-none flex gap-[1.2rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]   bg-inherit rounded-[4px] text-[#ffffff] text-xs md:text-sm ${
              error && "border-red-500"
            }`}
            value={value}
            name={name}
            onChange={(e) => setText(e.target.value)}
          >
            <option value="">{selectHolder}</option>
            {options &&
              options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
          {error && <Error error={error} />}
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
            className={`form-control w-[100%] py-3 px-7 border border-[#ffffff] outline-none flex gap-[1.2rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]   bg-inherit rounded-[4px] text-[#ffffff] text-xs md:text-sm ${
              error && "border-red-500"
            }`}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={(e) => setText(e.target.value)}
          />
          {error && <Error error={error} />}
        </div>
      );
  }
};
