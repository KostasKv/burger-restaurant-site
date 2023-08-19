import Image from "next/image";

import smileIcon from "@public/icon-smile.svg";
import burger1Img from "@public/burger-1.png";
import burger2Img from "@public/burger-2.png";
import burger3Img from "@public/burger-3.png";
import burger4Img from "@public/burger-4.png";
import burger5Img from "@public/burger-5.png";
import burger6Img from "@public/burger-6.png";
import burger7Img from "@public/burger-7.png";
import organicMeatsIcon from "@public/icon-organic-meats.svg";
import joKitchenImg from "@public/jo-kitchen.png";
import openUntilClosedImg from "@public/open-until-closed.png";
import videoPreviewImg from "@public/video-preview.png";
import companyLogo from "@public/company-logo.svg";

import PrimaryHeader from "./primary-header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <PrimaryHeader />
      <main className="font-serif w-full flex flex-col items-center">
        <section className="min-h-screen w-full bg-primary flex justify-center">
          <div className="relative w-full max-w-[1440px] px-[clamp(1.25rem,6vw,5rem)] isolate flex flex-col min-h-screen sm:px-[clamp(1.25rem,0.5rem+2.64vw,3rem)] sm:pt-[11.25rem] pb-10 pt-[6.69rem] sm:items-start sm:pb-16">
            <h1 className="relative font-serif-alt text-[clamp(1.5rem,1rem+6.4vw,6.875rem)] uppercase leading-none ">
              New York&apos;s <br /> favorite{" "}
              <span className="relative w-[1.08em] h-0 bg-purple-500 hidden sm:inline-block">
                <Image
                  src={smileIcon}
                  alt=""
                  className="absolute -left-[0.3em] -translate-y-[84%]"
                />
              </span>
              <br /> burger
            </h1>
            <p className="mt-3 text-lg sm:text-2xl max-w-[clamp(24rem,10rem+45vw,38rem)] sm:mt-[1.19rem] bg-inherit bg-clip-text">
              In a world so painfully serious, yet so ridiculous, you knew it
              was only a matter of time before plant-based steak became a thing.
            </p>
            <a
              href="#menu"
              className="flex justify-center items-center mt-auto w-full h-[3.375rem] max-w-[20rem] text-xl bg-black text-white uppercase sm:max-w-[16.875rem] sm:text-2xl sm:mt-12 hover:bg-accent duration-75 hover:text-black">
              Browse Menu
              <span className="absolute bottom-32 left-[15%] sm:top-[clamp(21%,50%-15vw,40%)] w-[clamp(16rem,5rem+29.18vw,31.26rem)] -z-10 -rotate-[2.36deg] sm:right-[clamp(1.5rem,1rem+3.3vw,4rem)] sm:inset-auto">
                <Image src={burger1Img} alt="burger" className="" />
              </span>
            </a>
          </div>
        </section>
        <section
          id="about"
          className="relative px-5 py-16 max-w-[1440px] m-auto sm:px-[3.12rem] md:py-[12rem]">
          <h2 className="hidden">About</h2>
          <div className="md:flex md:items-center">
            <p className="leading-none text-[clamp(2rem,6vw,3.5rem)] text-primary font-serif-alt uppercase max-w-[20ch]">
              Hi, we&apos;re Jo&apos;s
              <br />
              Burgers, a collective of creators who
              <br />
              love burgers and good food.
            </p>
            <figure className="mt-8 w-fit md:mt-0">
              <Image
                src={joKitchenImg}
                alt="Jo working in the kitchen"
                className="max-w-[min(100%,35rem)] mx-auto"
              />
              <figcaption className="mt-3 text-xs text-center sm:text-lg md:text-2xl">
                This is Jo. He started everything 40 years ago.
              </figcaption>
            </figure>
          </div>
          <div className="mt-16 md:grid md:grid-cols-2 md:gap-20 lg:gap-40 md:items-center md:mt-48">
            <div>
              <Image
                src={openUntilClosedImg}
                alt='Sign saying "We are open until closed"'
                className="max-w-[min(100%,40rem)]"
              />
            </div>
            <div>
              <p className="mt-8 text-[2rem] leading-none text-primary font-serif-alt uppercase sm:text-5xl lg:text-7xl">
                Food is for <br />
                everyone.
              </p>
              <p className="mt-4 text-lg leading-normal text-primary sm:text-xl md:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="min-h-[clamp(23.4375rem,10vw,37.5rem)] px-20 flex flex-col gap-4 justify-center items-center relative overflow-hidden md:flex-row">
            <Image
              src={videoPreviewImg}
              alt="background"
              className="absolute left-0 max-w-[100vw] grayscale -z-10"
              placeholder="blur"
            />
            <div>
              <p className="leading-none uppercase text-white font-serif-alt text-2xl text-center sm:text-3xl md:text-[2.5rem]">
                We&apos;re different
              </p>
            </div>
            <button className="w-16 h-16 rounded-full text-white bg-primary">
              <FontAwesomeIcon icon={faPlay} size="lg" />
            </button>
          </div>
          <div className="relative max-w-[1440px] m-auto">
            <Image
              src={organicMeatsIcon}
              alt="Organic meats"
              className="absolute bottom-0 left-[clamp(1.25rem,4vw,2.62rem)] translate-y-1/2 w-[clamp(7.52rem,2rem+10.16vw,13rem)]"
            />
          </div>
        </section>
        <section
          id="menu"
          className="px-5 py-20 sm:px-[3.12rem] max-w-[1440px] m-auto md:py-40">
          <div className="m-auto">
            <h2 className="text-[2rem] leading-none text-primary font-serif-alt uppercase sm:text-5xl md:text-7xl">
              Our Burgers
            </h2>
            <p className="mt-4 text-lg leading-normal text-primary sm:text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-12 m-auto max-w-xs grid grid-rows-4 grid-cols-1 gap-10 md:grid-rows-1 md:grid-cols-4 md:gap-4 md:max-w-none">
              <div className="flex flex-col text-center bg-white">
                <div className="relative w-full before:block before:pb-[100%] overflow-hidden">
                  <Image
                    src={burger1Img}
                    alt="burger"
                    placeholder="blur"
                    className="absolute h-full w-full top-0 left-0 object-cover object-bottom"
                  />
                </div>
                <div className="p-6 w-full">
                  <p className="uppercase font-serif-alt text-2xl">
                    SHRIMP YO!
                  </p>
                  <p className="mt-1">
                    Grilled shrimp burger with coleslaw in a homemade fluffy bun
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-center bg-white">
                <div className="relative w-full before:block before:pb-[100%] overflow-hidden">
                  <Image
                    src={burger2Img}
                    alt="burger"
                    placeholder="blur"
                    className="absolute scale-[1.5] -translate-x-4 h-full w-full top-0 left-0 object-cover object-bottom"
                  />
                </div>
                <div className="p-6 w-full">
                  <p className="uppercase font-serif-alt text-2xl">
                    DOUBLE TROUBLE
                  </p>
                  <p className="mt-1">
                    Angus Beef burger with Gouda cheese and bacon in a sesame
                    bun.
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-center bg-white">
                <div className="relative w-full before:block before:pb-[100%] overflow-hidden">
                  <Image
                    src={burger3Img}
                    alt="burger"
                    placeholder="blur"
                    className="absolute h-full w-full top-0 left-0 object-cover object-bottom"
                  />
                </div>
                <div className="p-6 w-full">
                  <p className="uppercase font-serif-alt text-2xl">JUICY JO</p>
                  <p className="mt-1">
                    Beef Burger with fried onion toped with ragu sauce in a rye
                    bun.
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-center bg-white">
                <div className="relative w-full before:block before:pb-[100%] overflow-hidden">
                  <Image
                    src={burger4Img}
                    alt="burger"
                    placeholder="blur"
                    className="absolute scale-[1.4] translate-x-4 translate-y-4 h-full w-full top-0 left-0 object-cover object-bottom"
                  />
                </div>
                <div className="p-6 w-full">
                  <p className="uppercase font-serif-alt text-2xl">
                    CRISPY CHI
                  </p>
                  <p className="mt-1">
                    Beef Burger with fried onion toped with ragu sauce in a rye
                    bun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="review"
          className="w-full max-w-[1440px] px-5 pb-16 sm:px-[3.12rem]">
          <h2 className="text-[2rem] leading-none text-primary font-serif-alt uppercase sm:text-5xl md:text-7xl">
            SOME REVIEWS
          </h2>
          <p className="mt-4 text-lg leading-normal text-primary sm:text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* TODO: Create review card component & displayer component*/}
          <div className="p-5 bg-white md:p-5 h-fit grid gap-x-4 grid-cols-[max-content,1fr] grid-rows-[max-content,1fr]">
            <Image
              src="https://i.pravatar.cc/48"
              width={48}
              height={48}
              className="w-8 h-8 rounded-full md:w-12 md:h-12"
            />
            <span className="self-center text-sm font-semibold uppercase">
              John Doe
            </span>
            <div></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* </div> */}
        </section>
        <section id="social" className="w-full">
          <div className="w-full h-fit grid grid-cols-2 grid-rows-2 sm:grid-cols-5 sm:grid-rows-1">
            <div className="hidden relative before:pb-[100%] before:block sm:inline-block">
              <Image
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={openUntilClosedImg}
                alt="burger"
                placeholder="blur"></Image>
            </div>
            <div className="relative before:pb-[100%] before:block">
              <Image
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={burger5Img}
                alt="burger"
                placeholder="blur"></Image>
            </div>
            <div className="relative before:pb-[100%] before:block">
              <Image
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={burger6Img}
                alt="burger"
                placeholder="blur"></Image>
            </div>
            <div className="relative before:pb-[100%] before:block">
              <Image
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={burger7Img}
                alt="burger"
                placeholder="blur"></Image>
            </div>
            <div className="relative flex justify-center items-center text-[clamp(1.7rem,8.5vw-0.3rem,3.6rem)] uppercase text-primary font-semibold bg-accent before:pb-[100%] before:block sm:text-[clamp(1rem,3vw,4.5rem)]">
              FOLLOW US <br /> ON <br /> INSTAGRAM
            </div>
          </div>
          <h2 className="hidden">Social</h2>
        </section>
      </main>
      <footer className="flex justify-center px-[1.25rem] pt-16 pb-12 bg-primary sm:px-[3.12rem] md:pt-36">
        <div className="max-w-[1440px] w-full">
          <div className="max-w-[600px]">
            <span className={"text-3xl font-serif-alt"}>
              <Image
                src={companyLogo}
                alt="JO'S&copy;"
                className="w-full max-w-[19.2rem]"
              />
            </span>
            <h2 className="mt-6 text-[2rem] leading-none font-serif-alt uppercase sm:text-4xl md:text-[2.5rem] md:mt-10">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-sm sm:text-base">
              By subscribing to our newsletter, you will receive the latest
              tips, and promotions about our products and services straight to
              your inbox.
            </p>
            <form className="mt-6 flex flex-col md:flex-row md:mt-4 max-w-[34rem]">
              <input
                type="email"
                name="newsletter"
                id="newsletter-email"
                placeholder="Enter your email"
                className="flex-grow py-[1rem] px-1 text-center bg-transparent border-black border-2 placeholder:text-black"
              />
              <button
                type="submit"
                className="mt-4 py-3 px-6 text-xl font-semibold bg-black text-white uppercase sm:text-lg md:mt-0">
                SUBSCRIBE
              </button>
            </form>
            <div className="mt-12 mx-auto w-fit flex gap-3 uppercase text-sm sm:text-base md:mx-0 md:mt-20">
              <a className="cursor-pointer hover:underline">PRIVACY</a>
              <a className="cursor-pointer hover:underline">TERMS</a>
              <a className="cursor-pointer hover:underline">ACCESSIBILITY</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
