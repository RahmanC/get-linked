import Form from "@/components/registerComponent/Form";

import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row px-[2.5rem] md:px-[13rem] md:gap-[14rem] justify-center items-start md:items-center  min-h-screen min-w-screen">
      <p className="text-[#D434FE] md:hidden md:w-auto text-[1rem] mt-4 font-[700]">
        Register
      </p>
      <img src="/register.svg" alt="register" />
      <Form />
    </div>
  );
};

export default Register;
