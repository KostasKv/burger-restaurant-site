import PrimaryHeader from "./components/PrimaryHeader/PrimaryHeader";
import burger1Img from "./assets/burger-1.png";
import smileIcon from "./assets/icon-smile.svg";
import organicMeatsIcon from "./assets/icon-organic-meats.svg";

function App() {
  return (
    <>
      <PrimaryHeader />
      <section className="min-h-screen bg-primary flex justify-center">
        <div className="relative w-full px-[clamp(1.25rem,10vw,5rem)] md:max-w-[1800px] isolate flex flex-col min-h-screen sm:px-[clamp(1.25rem,0.5rem+2.64vw,3rem)] sm:pt-[11.25rem] pb-10 pt-[6.69rem] sm:items-start">
          <h1 className="relative text-[clamp(1.5rem,1rem+6.4vw,6.875rem)] uppercase leading-none ">
            New York's <br /> favorite{" "}
            <span className="relative w-[1.08em] h-0 bg-purple-500 hidden sm:inline-block">
              <img
                src={smileIcon}
                alt=""
                className="absolute -left-[0.3em] -translate-y-[84%]"
              />
            </span>
            <br /> burger
          </h1>
          <p className="mt-3 text-lg sm:text-2xl max-w-[clamp(24rem,10rem+45vw,38rem)] sm:mt-[1.19rem] bg-inherit bg-clip-text">
            In a world so painfully serious, yet so ridiculous, you knew it was
            only a matter of time before plant-based steak became a thing.
          </p>
          <a
            href="#menu"
            className="flex justify-center items-center mt-auto w-full h-[3.375rem] max-w-[20rem] text-xl bg-black text-white uppercase sm:max-w-[16.875rem] sm:text-2xl sm:mt-12 hover:bg-accent duration-75 hover:text-black">
            Browse Menu
          </a>
          <span className="absolute bottom-32 left-[15%] sm:top-[clamp(21%,50%-15vw,40%)] w-[clamp(16rem,5rem+29.18vw,31.26rem)] -z-10 -rotate-[2.36deg] sm:right-[clamp(1.5rem,1rem+3.3vw,4rem)] sm:inset-auto">
            <img src={burger1Img} alt="burger" />
          </span>
        </div>
      </section>
      <main>
        <section
          id="about"
          className="relative grid grid-cols-[3.13rem_1fr_3.13rem] [&>*]:col-start-2">
          <h2 className="hidden">About</h2>
          <p className="uppercase">
            Hi, we're Jo's Burgers, a collective of creators who love burgers
            and good food.
          </p>
          <div className="">
            <img src="" alt="Jo working in the kitchen" />
            <p>This is Jo He started everything 40 years ago.</p>
          </div>
          <div>
            <img src="" alt='Sign saying "We are open until closed"' />
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
          <div className="full-bleed flex flex-col justify-center items-center">
            <div>
              <p className="uppercase">We're different</p>
            </div>
            <button className="w-16 h-16 rounded-full text-white bg-primary">
              <i className="fa fa-play"></i>
            </button>
          </div>
          <img
            src={organicMeatsIcon}
            alt="Organic meats"
            className="absolute bottom-0 translate-y-1/2 w-[clamp(7.52rem,2rem+10.16vw,13rem)]"
          />
        </section>
        <section id="menu" className="bg-green-500 min-h-screen">
          <h2 className="pt-14">Our Burgers</h2>
        </section>
        <section id="review">
          <h2 className="">Some Reviews</h2>
        </section>
        <section id="social">
          <h2 className="hidden">Social</h2>
        </section>
      </main>
    </>
  );
}

export default App;
