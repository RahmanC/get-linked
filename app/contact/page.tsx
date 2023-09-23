import Form from "@/components/contactComponent/Form";
import Info from "@/components/contactComponent/Info";
import React from "react";

const Contact = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row px-[2.5rem] md:px-[13rem] md:gap-[14rem] justify-center items-center min-h-screen flex-1 overflow-y-hidden min-w-screen md:mt-[7%]">
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute top-0 left-[-20%] opacity-[38%] "
      />
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute bottom-[-40%] right-[-20%]   opacity-[40%]"
      />
      <Info />
      <Form />
    </div>
  );
};

export default Contact;
