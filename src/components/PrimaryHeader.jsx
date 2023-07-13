import { useState } from "react";
import "./PrimaryHeader.css";

export default function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="fixed flex justify-between items-center w-full px-[3.12rem] py-[1.06rem] isolate bg-primary z-10">
      <span className="">
        <img src="src/assets/company-logo.svg" alt="Jo's logo" />
      </span>
      <button
        className="sm:hidden"
        onClick={onMenuClick}
        aria-controls="primary-navigation"
        aria-expanded="false">
        <span className="sr-only">Menu</span>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Group 3571">
            <circle id="Ellipse 40" cx="20" cy="20" r="20" fill="black" />
            <g id="Group 3570">
              <rect
                id="Rectangle 1136"
                x="11"
                y="14"
                width="18"
                height="2"
                fill="white"
              />
              <rect
                id="Rectangle 1137"
                x="11"
                y="19"
                width="18"
                height="2"
                fill="white"
              />
              <rect
                id="Rectangle 1138"
                x="11"
                y="24"
                width="18"
                height="2"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </button>
      <nav
        className={`fixed -z-10 sm:relative ${
          isMenuOpen ? "visible" : "invisible"
        }  flex flex-col items-center justify-center bg-primary inset-0 translate-y-4 sm:translate-y-0`}>
        <ul
          id="primary-navigation"
          className={`flex flex-col gap-8 text-2xl font-semibold leading-normal uppercase sm:flex-row sm:visible sm:static`}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Review</a>
          </li>
          <li>
            <a href="">Social</a>
          </li>
        </ul>
        <span className="hsm: sm:hidden mt-[min(4rem,5vh)]">
          <img src="src/assets/icon-smile.svg" alt="" />
        </span>
      </nav>
    </header>
  );
}
