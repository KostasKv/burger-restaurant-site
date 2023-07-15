import { useState } from "react";
import companyLogo from "../../assets/company-logo.svg";
import smileIcon from "../../assets/icon-smile.svg";
import "./PrimaryHeader.css";
import HamburgerMenuButton from "../HambugerMenuButton/HamburgerMenuButton";

export default function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="fixed flex justify-between items-center w-full px-[3.12rem] py-[1.06rem] isolate bg-primary z-10 sm:py-8">
      <span className="text-3xl font-['Bowlby_One'] cursor-pointer">
        <img src={companyLogo} alt="JO'S&copy;" />
      </span>
      <HamburgerMenuButton onClick={onMenuClick} />
      <nav
        className={`fixed -z-10 sm:relative ${
          isMenuOpen ? "visible" : "invisible"
        }  flex flex-col items-center justify-center bg-primary inset-0 translate-y-4 sm:translate-y-0`}>
        <ul
          id="primary-navigation"
          className={`flex flex-col gap-8 text-2xl font-semibold leading-normal uppercase sm:flex-row sm:visible sm:static`}>
          <li className="hover:text-accent duration-75">
            <a href="">About</a>
          </li>
          <li className="hover:text-accent duration-75">
            <a href="">Menu</a>
          </li>
          <li className="hover:text-accent duration-75">
            <a href="">Review</a>
          </li>
          <li className="hover:text-accent duration-75">
            <a href="">Social</a>
          </li>
        </ul>
        <span className="hsm: sm:hidden mt-[min(4rem,5vh)]">
          <img src={smileIcon} alt="" />
        </span>
      </nav>
    </header>
  );
}
