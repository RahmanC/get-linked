"use client";
import React from "react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { NavItem } from "../../types/types";

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
    path: "contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full px-[3rem] md:px-auto pt-[2.124rem] pb-[1.3125] md:pt-[4.1875rem] md:pb-[1.875rem] sm:px-20 fixed top-0 z-50 border-b border-[#ffffff] border-opacity-[18%]">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-2 md:py-1 md:block">
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
            <div className="md:hidden">
              <div
                className="p-2 text-gray-700 rounded-md outline-none cursor-pointer"
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

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-start md:items-center justify-center space-y-8 flex flex-col  md:flex-row md:space-x-[3.5rem] md:space-y-0 cursor-pointer">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <ScrollLink
                    key={idx}
                    to={item.path}
                    className={
                      "block lg:inline-block text-[1rem] font-[400] text-[#ffffff]  hover:text-neutral-500 "
                    }
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
              })}
              <Link
                href="/register"
                className=" rounded-[4px] px-[3.25rem] py-[1rem] text-[1rem] font-[400]"
                style={{
                  background:
                    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
                }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
