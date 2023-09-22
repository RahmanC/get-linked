"use client";

import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll/modules";
import { useFulLinks } from "@/mock/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <section
      className={`${
        pathname !== "/" && "hidden"
      } flex flex-col items-start md:items-center gap-8 md:gap-14  justify-between  px-[2.5rem] md:px-[5rem] py-[1.8125rem] md:py-[3.875rem] text-xs font-[400] min-h-max`}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-24  justify-between">
        <div className="flex  flex-col justify-between md:w-1/3">
          <div className="flex flex-col gap-2">
            <ScrollLink to="/">
              <div className="container flex items-center space-x-2 cursor-pointer">
                <Image
                  src="/logo.png"
                  width={100}
                  height={30}
                  alt="getLinked"
                />
              </div>
            </ScrollLink>
            <p className="">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <p className="flex items-center gap-4">
              Terms of Use{" "}
              <span className="text-[#D434FE] text-lg font-bold">|</span>{" "}
              Privacy Policy
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#D434FE] font-[600]">Useful Links</p>

          <ul className="my-2">
            {useFulLinks.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <li className="my-3">{item.label}</li>
                </Link>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <p className="text-[#D434FE] font-[400] text-xs">Follow us</p>
            <div className="flex items-center gap-4">
              <img src="/instagram.svg" alt="instagram" />
              <img src="/twitter.svg" alt="twitter" />
              <img src="/facebook.svg" alt="facebook" />
              <img src="/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#D434FE] font-[600]">Contact Us</p>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-4">
              <img src="/phone.svg" alt="phone" />
              <p>+234 6707653444</p>
            </div>
            <div className="flex items-start gap-4">
              <img src="/map.svg" alt="map" />
              <p className="flex flex-col">
                27,Alara Street
                <span>Yaba 100012</span>
                <span>Lagos State</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>All rights reserved. © getlinked Ltd.</p>
    </section>
  );
};

export default Footer;
