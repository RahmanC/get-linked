"use client";

import React, { useEffect, useState } from "react";

import { AppField } from "../appForm/AppField";
import Button from "../Button";
import Modal from "../Modal";
import axios from "axios";
import { baseUrl } from "@/mock/data";
import Error from "../appForm/Error";

const Form = () => {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamName, setTeam] = useState("");
  const [topic, setTopic] = useState("");
  const [terms, setTerms] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [networkError, setNetworkError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [categoryList, setCategoryList] = useState([]);
  const [error, setError] = React.useState({
    category: "",
    email: "",
    phone: "",
    teamName: "",
    topic: "",
    terms: "",
  });

  // clear network error after 10secs
  useEffect(() => {
    if (!!networkError) {
      const timer = setTimeout(() => {
        setNetworkError("");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [networkError]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${baseUrl}/categories-list`);
      setCategoryList(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
    validateField("category", category);
    validateField("phone", phone);
    validateField("teamName", teamName);
    validateField("topic", topic);
    validateField("terms", terms);

    let validation =
      email && teamName && phone && topic && category && size && terms;

    const apiData = {
      email: email,
      team_name: teamName,
      phone_number: phone,
      project_topic: topic,
      category: category,
      group_size: size,
      privacy_poclicy_accepted: terms,
    };

    if (!validation) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/registration`, apiData);

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
    <div className="md:border border-[#ffffff] border-opacity-[3%] rounded-xl md:bg-[#ffffff] md:bg-opacity-[3%] p-0 md:p-[5.125rem] md:my-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full ">
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
        <div className="flex items-center justify-center">
          {networkError && <Error error={networkError} />}
        </div>
        <form className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <AppField
              label="Team's Name"
              name="team_name"
              value={teamName}
              setText={setTeam}
              placeholder="Enter the name of your group"
              error={error.teamName}
            />

            <AppField
              label="Phone"
              name="phone_number"
              value={phone}
              setText={setPhone}
              placeholder="Enter your phone number"
              error={error.phone}
            />

            <AppField
              label="Email"
              name="email"
              value={email}
              setText={setEmail}
              placeholder="Enter your email address"
              error={error.email}
            />
            <AppField
              label="Project Topic"
              name="project_topic"
              value={topic}
              setText={setTopic}
              placeholder="What is your group project topic"
              error={error.topic}
            />
            <AppField
              label="Category"
              name="category"
              select={true}
              value={category}
              setText={setCategory}
              selectHolder="Select your category"
              options={categoryList}
              error={error.category}
            />
            <AppField
              label="Group Size"
              name="group_size"
              select={true}
              value={size}
              setText={setSize}
              selectHolder="Select"
              options={[
                { name: "5", id: 5 },
                { name: "10", id: 10 },
                { name: "20", id: 20 },
              ]}
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
            label={isLoading ? "please wait..." : "Register Now"}
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
