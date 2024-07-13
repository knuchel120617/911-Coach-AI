import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../Button/Buttons";

function Hero() {
  const naviage = useNavigate();
  const handleClick = () => {
    console.log("clicked");
    naviage("/signup");
  };
  return (
    <>
      <section className="w-full px-[40px] mt-[120px] mb-[40px]">
        <div className="mb-[30px] text-center flex flex-col items-center justify-center gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 lg:text-5xl" style={{ color: '#333333' }}>
              Meet EM-Buddy: your free AI-powered EMD assistant
            </h1>
            <p className="text-xl text-center leading-relaxed text-gray-700" style={{ color: '#333333' }}>
              Spend less time on prep and more time with your students. Khanmigo
              is now completely, 100% free.
            </p>
          </div>
          <div className="w-auto">
            <Buttons
              onClick={handleClick}
              primary
              rounded
              className="text-white bg-[#009379] px-6 py-3 border-none rounded-[10px] text-sm" 
              style={{ minWidth: "auto", width: "auto" }}
            >
              Get Started
            </Buttons>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
