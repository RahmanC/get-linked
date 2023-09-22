"use client";

import React, { useState } from "react";

import { AppField } from "../appForm/AppField";
import Button from "../Button";
import Modal from "../Modal";

const Form = () => {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamName, setTeam] = useState("");
  const [topic, setTopic] = useState("");
  const [terms, setTerms] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = () => {};
  return (
    <div className="md:border border-[#ffffff] border-opacity-[3%] rounded-xl bg-transparent p-0 md:p-[5.625rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full md:w-[46.25rem]">
      <p className="text-[#D434FE] hidden md:block md:w-auto text-[2rem] font-[600]">
        Register
      </p>
      <p className="text-xs md:text-sm font-[400] flex gap-3 items-end mt-11 mb-5">
        Be part of this movement!{" "}
        <span>
          <img src="/users.svg" alt="users" />
        </span>
      </p>
      <p className="text-[1.25rem] md:text-2xl font-normal my-6  uppercase">
        create your account
      </p>
      <div className="my-9 md:w-[558px]">
        <form className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <AppField
              label="Team's Name"
              name="team_name"
              value={teamName}
              setText={setTeam}
              placeholder="Enter the name of your group"
            />

            <AppField
              label="Phone"
              name="phone"
              value={phone}
              setText={setPhone}
              placeholder="Enter your phone number"
            />

            <AppField
              label="Email"
              name="email"
              value={email}
              setText={setEmail}
              placeholder="Enter your email address"
            />
            <AppField
              label="Project Topic"
              name="topic"
              value={topic}
              setText={setTopic}
              placeholder="What is your group project topic"
            />
            <AppField
              label="Category"
              name="category"
              select={true}
              value={category}
              setText={setCategory}
              selectHolder="Select your category"
              options={["Automation", "Software Development"]}
            />
            <AppField
              label="Group Size"
              name="size"
              select={true}
              value={size}
              setText={setSize}
              selectHolder="Select"
              options={["10", "20"]}
            />
          </div>
          <p className="text-[0.5625rem] md:text-xs text-[#FF26B9] italic font-normal mt-6 mb-4">
            Please review your registration details before submitting
          </p>
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => setTerms(!terms)}
          >
            <div
              className={`rounded-sm flex items-center justify-center border w-[0.875rem] h-[0.875rem] text-xs border-[#ffffff] text-[#FF26B9] font-[900]`}
            >
              {terms && <img src="/mark.svg" alt="check" />}
            </div>
            <p className="text-[0.625rem] md:text-xs ">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>

          <Button
            customStyle="w-full mt-6"
            onClick={handleSubmit}
            label="Register Now"
          />
        </form>
      </div>

      <Modal showModal={isOpen}>
        <div className="flex flex-col items-center justify-center ">
          <img src="/congratulation.svg" alt="congrats" />
          <p className="flex flex-col text-center text-[1rem] md:text-[2rem] font-[600] my-7">
            Congratulations <span>you have successfully Registered!</span>
          </p>
          <p className="text-xs md:text-sm font-[500] md:font-[600]">
            Yes, it was easy and you did it!
          </p>
          <p className="flex items-center gap-2 text-xs md:text-sm font-[500] md:font-[600]">
            check your mail box for next step{" "}
            <span>
              <img src="/emoji.svg" alt="emoji" />
            </span>{" "}
          </p>
          <Button
            label="Back"
            customStyle="w-full my-7"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Form;
