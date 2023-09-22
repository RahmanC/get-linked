"use client";

import React, { useState } from "react";

import { AppField } from "../appForm/AppField";
import Button from "../Button";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/mock/data";
import Error from "../appForm/Error";
import Modal from "../Modal";

const Form = () => {
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [networkError, setNetworkError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState({
    email: "",
    message: "",
    phone: "",
    firstName: "",
  });

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const validateField = (fieldName: string, value: any) => {
      if (!value) {
        setError((prevS) => ({ ...prevS, [fieldName]: "required" }));
      } else {
        setError((prevS) => ({ ...prevS, [fieldName]: "" }));
      }
    };

    validateField("email", email);
    validateField("message", message);
    validateField("phone", phone);
    validateField("firstName", firstName);

    let validation = email && message && phone && firstName;

    const apiData = {
      email: email,
      phone_number: phone,
      first_name: firstName,
      message: message,
    };

    if (!validation) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/contact-form`, apiData);

      let success = response.status == 201;
      if (success) {
        setIsLoading(false);
        setIsOpen(true);
      }
    } catch (error: any) {
      setIsLoading(false);

      setNetworkError(error.response.data.email?.[0]);
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
        <div className="flex items-center justify-center">
          {networkError && <Error error={networkError} />}
        </div>
        <form className="flex flex-col space-y-4">
          <AppField
            name="first_name"
            value={firstName}
            setText={setFirstname}
            placeholder="First Name"
            error={error.firstName}
          />

          <AppField
            name="email"
            value={email}
            setText={setEmail}
            placeholder="Mail"
            type="email"
            error={error.email}
          />
          <AppField
            name="phone"
            value={phone}
            setText={setPhone}
            placeholder="Phone Number"
            error={error.phone}
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
            <Button
              onClick={handleSubmit}
              label={isLoading ? "please wait..." : "Submit"}
            />
          </div>
        </form>
      </div>

      <Modal showModal={isOpen}>
        <div className="flex flex-col items-center justify-center ">
          <img src="/congratulation.svg" alt="congrats" />
          <p className="flex flex-col text-center text-[1rem] md:text-[2rem] font-[600] my-7">
            Successful <span>your message was sent successfully!</span>
          </p>

          <Button
            label="Back"
            customStyle="w-full my-7"
            onClick={() => {
              window.location.href = "/";
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Form;
