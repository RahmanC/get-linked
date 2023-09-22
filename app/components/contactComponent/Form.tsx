"use client";

import React, { useState } from "react";

import { AppField } from "../appForm/AppField";
import Button from "../Button";
import Link from "next/link";

const Form = () => {
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [teamName, setTeam] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState({
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!email) {
      setError((prevS) => ({ ...prevS, email: "required" }));
    } else {
      setError((prevS) => ({ ...prevS, email: "" }));
    }

    if (!message) {
      setError((prevS) => ({ ...prevS, message: "required" }));
    } else {
      setError((prevS) => ({ ...prevS, message: "" }));
    }
  };
  return (
    <div className="md:border border-[#ffffff] border-opacity-[3%] rounded-xl bg-transparent p-0 md:p-[5.625rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full md:w-[38.5625rem]">
      <Link href="/">
        <img src="/back.svg" alt="go back" className="md:hidden mb-8" />
      </Link>
      <p className="text-[#D434FE] w-[197px] md:w-auto text-xl font-[600]">
        Questions or need assistance?
      </p>
      <p className="text-[#D434FE]  text-xl font-[600] flex">
        Let us know about it
        <span className="hidden md:block">!</span>
      </p>
      <p className="md:hidden text-xs font-normal my-6 w-[239px]">
        Email us below to any question related to our event
      </p>
      <div className="my-9">
        <form className="flex flex-col space-y-4">
          <div className="hidden md:block">
            <AppField
              name="first_name"
              value={firstName}
              setText={setFirstname}
              placeholder="First Name"
            />
          </div>

          <div className=" md:hidden flex flex-col gap-4">
            <AppField
              name="team_name"
              value={teamName}
              setText={setTeam}
              placeholder="Team's Name"
            />
            <AppField
              name="topic"
              value={topic}
              setText={setTopic}
              placeholder="Topic"
            />
          </div>

          <AppField
            name="email"
            value={email}
            setText={setEmail}
            placeholder="Mail"
            type="email"
            error={error.email}
          />
          <AppField
            name="message"
            value={message}
            setText={setMessage}
            placeholder="Message"
            textArea={true}
            error={error.message}
          />
          <div className="flex items-center justify-center ">
            <Button onClick={handleSubmit} label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
