"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import NavLink from "./Navlink";
import MenuOverlay from "./MenuOverlay";
// import logoWhite from "/logo-white.png"
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import { Button } from "../ui/button";
import { throttle } from "lodash"


const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "BDIA",
    path: "#bdia",
  },
  {
    title: "News",
    path: "#news",
  },
  {
    title: "Events",
    path: "#events",
  },
  {
    title: "Team",
    path: "#team",
  },{
    title: "Resources",
    path: "#resources",
  },
  {
    title: "Contact us",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(400);

  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;

    if (headerRef.current) {
      if (currentScrollY > lastScrollY) {
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        headerRef.current.style.transform = "translateY(0)";
      }
      setLastScrollY(currentScrollY);
    }
  }, 100); // Throttle function to prevent excessive calls

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, handleScroll]);

  return (
    <nav 
      ref={headerRef}
      style={{ transform: "translateY(0)", transition: "transform 0.3s ease" }}
      className=" overflow-hidden w-full fixed mx-auto border border-[#24182e] top-0 left-0 right-0 z-10 bg-[#24182e] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src="/Logo_white.png" width={64} height={64} alt="logo"/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <IoMdMenu  className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <HiMiniXMark className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <Link href="/sign">
            <Button variant="destructive">SignUp</Button>
          </Link>
          </ul>
          
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
