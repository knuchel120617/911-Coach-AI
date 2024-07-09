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
          <div className="flex  flex-col justify-center items-center gap-4  lg:flex-row">
            <Buttons
              className="w-[200px] text-white text-center pb-[60px] lg:w-[221px] lg:px-[20px] lg:py-[20px] lg:text-[18px] "
              primary
              rounded
            >
              Get Started
            </Buttons>
            <Buttons
              className="w-[200px]  text-[#009379] pb-[60px] text-center lg:w-[221px] lg:px-[20px] lg:py-[20px] lg:text-[18px] "
              alternate
              rounded
            >
              How It Works
            </Buttons>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
