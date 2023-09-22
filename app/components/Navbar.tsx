"use client";
import React from "react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { NavItem } from "../types/types";
import Button from "./Button";

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Timeline",
    path: "timeline",
  },
  {
    label: "Overview",
    path: "overview",
  },
  {
    label: "FAQs",
    path: "faq",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  console.log("path", pathname);
  const [navbar, setNavbar] = useState(false);

  // Function to check if a path contains a slash
  const hasSlash = (path: string) => path.includes("/");

  return (
    <header
      className={`${
        pathname === "/contact" && "hidden md:block"
      } w-full px-[2.5rem] md:px-auto py-[2.124rem] md:py-[2.124rem]  sm:px-20 fixed top-0 z-30 bg-[#150E28] border-b border-[#ffffff] border-opacity-[18%] `}
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-2 md:py-1 md:block">
            <ScrollLink to="/">
              <div
                className={`${
                  navbar && "hidden"
                } container flex items-center space-x-2 cursor-pointer`}
              >
                <Image
                  src="/logo.png"
                  width={100}
                  height={30}
                  alt="getLinked"
                />
              </div>
            </ScrollLink>
            <div className="md:hidden ">
              <div
                className="p-2  text-gray-700 rounded-md outline-none cursor-pointer"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <img src="./Close.svg" alt="close" />
                ) : (
                  <img src="./Hamburger.svg" alt="open" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#150E28] px-[2rem] md:px-0 rounded-[8px]">
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            } `}
          >
            <div className="items-start md:items-center justify-center space-y-8 flex flex-col  md:flex-row md:space-x-[3.5rem] md:space-y-0 cursor-pointer">
              {NAV_ITEMS.map((item, idx) => {
                const linkComponent = hasSlash(item.path) ? (
                  // Use Next.js Link
                  <Link
                    href={item.path}
                    className={`block lg:inline-block text-[1rem] font-[400] text-[#ffffff] transition-all duration-500 hover:scale-110 hover:bg-background hover:bg-clip-text hover:text-transparent`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  // Use react-scroll ScrollLink
                  <ScrollLink
                    to={item.path}
                    className={`block lg:inline-block text-[1rem] font-[400] text-[#ffffff]transition-all duration-500 hover:scale-110 hover:bg-background hover:bg-clip-text hover:text-transparent`}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </ScrollLink>
                );

                return <div key={idx}>{linkComponent}</div>;
              })}

              <Button label="Register" link="/register" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
