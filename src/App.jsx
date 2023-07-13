import PrimaryHeader from "./components/PrimaryHeader";

function App() {
  return (
    <>
      <PrimaryHeader />
      <section className="relative isolate min-h-screen bg-primary px-[clamp(1.25rem,0.5rem+2.64vw,3rem)] flex flex-col pt-[6.69rem] sm:pt-[11.25rem] pb-10">
        <h1 className="text-[clamp(1.5rem,1rem+6.4vw,6.875rem)] uppercase leading-none ">
          New York's <br /> favorite <br /> burger
        </h1>
        <p className="mt-3 text-lg sm:text-2xl max-w-[38rem] sm:mt-[1.19rem]">
          In a world so painfully serious, yet so ridiculous, you knew it was
          only a matter of time before plant-based steak became a thing.
        </p>
        <button className="mt-auto w-full h-[3.375rem] max-w-sm text-xl bg-black text-white uppercase sm:max-w-[16.875rem] sm:text-2xl sm:mt-12">
          Browse Menu
        </button>
        <span className="absolute right-[clamp(1.5rem,1rem+3.3vw,4rem)] top-[clamp(21%,50%-15vw,40%)] w-[clamp(16rem,5rem+29.18vw,31.26rem)] -z-10 -rotate-[2.36deg] sm:right-16">
          <img
            src="src/assets/burger-1.png"
            alt="burger"
            className="object-contain"
          />
        </span>
      </section>
    </>
  );
}

export default App;
