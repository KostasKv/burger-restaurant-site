"use client";
import Image from "next/image";
import { useState } from "react";
import companyLogo from "@public/company-logo.svg";
import smileIcon from "@public/icon-smile.svg";
import HamburgerMenuButton from "./hamburger-menu-button";

export default function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="fixed flex justify-between items-center w-full px-[1.25rem] py-[1.06rem] isolate bg-primary z-10 sm:py-8 sm:px-[3.12rem]">
      <span className={"text-3xl font-serif-alt cursor-pointer"}>
        <Image src={companyLogo} alt="JO'S&copy;" />
      </span>
      <HamburgerMenuButton isExpanded={isMenuOpen} onClick={onMenuClick} />
      <nav
        className={`fixed -z-10 sm:relative duration-500 ${
          isMenuOpen ? "visible translate-y-4" : "invisible -translate-y-full"
        }  flex flex-col items-center justify-center bg-primary inset-0 sm:translate-y-0`}>
        <ul
          id="primary-navigation"
          className={`flex flex-col gap-8 text-2xl font-semibold leading-normal uppercase sm:flex-row sm:visible sm:static`}>
          <li className="hover:text-accent duration-75">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-accent duration-75">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:text-accent duration-75">
            <a href="#review">Review</a>
          </li>
          <li className="hover:text-accent duration-75">
            <a href="#social">Social</a>
          </li>
        </ul>
        <span className="hsm: sm:hidden mt-[min(4rem,5vh)]">
          <Image src={smileIcon} alt="" />
        </span>
      </nav>
    </header>
  );
}
