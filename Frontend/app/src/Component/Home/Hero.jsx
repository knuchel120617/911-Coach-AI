import React from "react";
import Buttons from "../Button/Buttons";

function Hero() {
  return (
    <>
      <section className="w-full  mt-[120px] mb-[90px]">
        <div className="mb-[30px] text-center flex flex-col items-center justify-center gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 lg:text-5xl">
              Meet Khanmigo: your free AI-powered EMD assistant
            </h1>
            <p className="text-xl leading-relaxed text-gray-700">
              Spend less time on prep and more time with your students. Khanmigo
              is now completely, 100% free.
            </p>
          </div>
          <div className="mx-auto max-w-[221px]">
            <Buttons
              primary
              rounded
              className="bg-[#10B981] text-white font-bold py-3 px-6 flex items-center justify-center w-full hover:bg-[#059669]"
            >
              <span className="mr-2">🚀</span>
              Get Started
            </Buttons>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
