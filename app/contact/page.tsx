import Form from "@/components/contactComponent/Form";
import Info from "@/components/contactComponent/Info";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-[2.5rem] md:px-[13rem] md:gap-[14rem] justify-center items-center min-h-screen min-w-screen">
      <Info />
      <Form />
    </div>
  );
};

export default Contact;
