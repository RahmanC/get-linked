import Form from "@/components/registerComponent/Form";

import React from "react";

const Register = () => {
  return (
    <div className="relative flex flex-col md:flex-row px-[2.5rem] md:px-[3rem]  justify-center items-start md:items-center  min-h-screen flex-1 overflow-y-hidden  overflow-x-hidden min-w-screen max-w-screen md:mt-[9%]">
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute top-0 left-[-30%] z-20 opacity-[38%] "
      />
      <img
        src="/bg-blur.png"
        alt="lens-flare"
        className="absolute bottom-[-40%] right-[-20%]   opacity-[40%]"
      />
      <p className="text-[#D434FE] md:hidden md:w-auto text-[1rem] mt-4 font-[700]">
        Register
      </p>
      {/* <div className="md:w-1/2"> */}
      <img
        src="/register.svg"
        alt="register"
        className="md:w-[600px] md:h-[700px]"
      />
      {/* </div> */}

      <div className="flex flex-1">
        <Form />
      </div>
    </div>
  );
};

export default Register;
