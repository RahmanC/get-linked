import React from "react";

const Info = () => {
  return (
    <div className="md:flex flex-col item-start md:gap-5 ">
      <div className="hidden md:flex flex-col item-start gap-5 ">
        <p className="text-[2rem] font-[700] text-[#D434FE]">Get in touch</p>
        <p className="text-base font-normal">
          Contact <br /> Information
        </p>
        <p className="text-base font-normal">
          27,Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </p>
        <p className="text-base font-normal">Call Us : 07067981819</p>
        <p className="text-base font-normal">
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-3">
        <p className="text-[#D434FE] text-base font-normal">Share on</p>
        <div className="flex items-center gap-4">
          <img src="/instagram.svg" alt="instagram" />
          <img src="/twitter.svg" alt="twitter" />
          <img src="/facebook.svg" alt="facebook" />
          <img src="/linkedin.svg" alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Info;
