import PrimaryHeader from "./components/PrimaryHeader";
import burger1Img from "./assets/burger-1.png";
import smileIcon from "./assets/icon-smile.svg";

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
          <button className="mt-auto w-full h-[3.375rem] max-w-[20rem] text-xl bg-black text-white uppercase sm:max-w-[16.875rem] sm:text-2xl sm:mt-12 hover:bg-accent duration-75 hover:text-black">
            Browse Menu
          </button>
          <span className="absolute bottom-32 left-[15%] sm:top-[clamp(21%,50%-15vw,40%)] w-[clamp(16rem,5rem+29.18vw,31.26rem)] -z-10 -rotate-[2.36deg] sm:right-[clamp(1.5rem,1rem+3.3vw,4rem)] sm:inset-auto">
            <img src={burger1Img} alt="burger" />
          </span>
        </div>
      </section>
    </>
  );
}

export default App;
