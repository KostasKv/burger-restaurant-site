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
      <main className="font-serif">
        <section className="min-h-screen bg-primary flex justify-center">
          <div className="relative w-full px-[clamp(1.25rem,10vw,5rem)] md:max-w-[1800px] isolate flex flex-col min-h-screen sm:px-[clamp(1.25rem,0.5rem+2.64vw,3rem)] sm:pt-[11.25rem] pb-10 pt-[6.69rem] sm:items-start">
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
            </a>
            <span className="absolute bottom-32 left-[15%] sm:top-[clamp(21%,50%-15vw,40%)] w-[clamp(16rem,5rem+29.18vw,31.26rem)] -z-10 -rotate-[2.36deg] sm:right-[clamp(1.5rem,1rem+3.3vw,4rem)] sm:inset-auto">
              <Image src={burger1Img} alt="burger" />
            </span>
          </div>
        </section>
        <section id="about" className="relative px-5 ">
          <h2 className="hidden">About</h2>
          <p className="uppercase">
            Hi, we&apos;re Jo&apos;s Burgers, a collective of creators who love
            burgers and good food.
          </p>
          <div>
            <Image
              src={joKitchenImg}
              alt="Jo working in the kitchen"
              className="max-w-[min(100%,40rem)]"
            />
            <p>This is Jo. He started everything 40 years ago.</p>
          </div>
          <div>
            <Image
              src={openUntilClosedImg}
              alt='Sign saying "We are open until closed"'
              className="max-w-[min(100%,40rem)]"
            />
            <div>
              <p className="uppercase">Food is for everyone.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="h-[37.5rem] px-20 flex flex-col gap-4 justify-center items-center relative overflow-hidden md:flex-row">
            <Image
              src={videoPreviewImg}
              alt="background"
              className="absolute left-0 max-w-[100vw] grayscale -z-10"
            />
            <div>
              <p className="leading-6 uppercase text-white font-serif-alt text-[1.5rem] text-center md:text-[2.5rem]">
                We&apos;re different
              </p>
            </div>
            <button className="w-16 h-16 rounded-full text-white bg-primary">
              <FontAwesomeIcon icon={faPlay} size="lg" />
            </button>
          </div>
          <Image
            src={organicMeatsIcon}
            alt="Organic meats"
            className="absolute bottom-0 translate-y-1/2 w-[clamp(7.52rem,2rem+10.16vw,13rem)]"
          />
        </section>
        <section id="menu" className="">
          <h2 className="pt-[10rem] font-serif-alt">Our Burgers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-col items-center text-center bg-white">
            <Image src={burger1Img} alt="burger" placeholder="blur" />
            <p className="uppercase font-serif-alt text-2xl">SHRIMP YO!</p>
            <p className="max-w-[80%]">
              Grilled shrimp burger with coleslaw in a homemade fluffy bun
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white">
            <Image src={burger2Img} alt="burger" placeholder="blur" />
            <p className="uppercase font-serif-alt text-2xl">DOUBLE TROUBLE</p>
            <p className="max-w-[80%]">
              Angus Beef burger with Gouda cheese and bacon in a sesame bun.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white">
            <Image src={burger3Img} alt="burger" placeholder="blur" />
            <p className="uppercase font-serif-alt text-2xl">JUICY JO</p>
            <p className="max-w-[80%]">
              Beef Burger with fried onion toped with ragu sauce in a rye bun.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white">
            <Image src={burger4Img} alt="burger" placeholder="blur" />
            <p className="uppercase font-serif-alt text-2xl">CRISPY CHI</p>
            <p className="max-w-[80%]">
              Beef Burger with fried onion toped with ragu sauce in a rye bun.
            </p>
          </div>
        </section>
        <section id="review">
          <h2 className="text-[2rem] font-serif-alt uppercase">SOME REVIEWS</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* TODO: Create review card component & displayer component*/}
        </section>
        <section id="social">
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-5 md:grid-rows-1">
            <Image
              className="hidden md:inline"
              src={openUntilClosedImg}
              alt="burger"
              placeholder="blur"></Image>
            <Image src={burger5Img} alt="burger" placeholder="blur"></Image>
            <Image src={burger6Img} alt="burger" placeholder="blur"></Image>
            <Image src={burger7Img} alt="burger" placeholder="blur"></Image>
            <div className="bg-accent uppercase text-primary">
              FOLLOW US ON INSTAGRAM
            </div>
          </div>
          <h2 className="hidden">Social</h2>
        </section>
      </main>
      <footer className="px-[1.25rem] bg-primary">
        <span className={"text-3xl font-serif-alt cursor-pointer"}>
          <Image src={companyLogo} alt="JO'S&copy;" />
        </span>
        <form className="flex flex-col">
          <h2 className="font-serif-alt uppercase">
            Subscribe to our newsletter
          </h2>
          <p>
            By subscribing to our newsletter, you will receive the latest tips,
            and promotions about our products and services straight to your
            inbox.
          </p>
          <input
            type="email"
            name="newsletter"
            id="newsletter-email"
            placeholder="Enter your email"
          />
          <button type="submit" className="bg-black text-white uppercase">
            SUBSCRIBE
          </button>
        </form>
        <div className="flex gap-2 uppercase">
          <a className="cursor-pointer hover:underline">PrIVACY</a>
          <a className="cursor-pointer hover:underline">TERMS</a>
          <a className="cursor-pointer hover:underline">ACCESSIBILITY</a>
        </div>
      </footer>
    </>
  );
}
