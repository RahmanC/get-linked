import React from "react";

interface Error {
  error: string;
}
const Error = ({ error }: Error) => {
  return <div className="text-xs text-red-400 italic font-[400]">{error}</div>;
};

export default Error;
