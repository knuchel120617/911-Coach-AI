import React from "react";
import Buttons from "../Button/Buttons";
import { useNavigate } from "react-router-dom";

function Cta() {
  const naviage = useNavigate();
  const handleClick = () => {
    naviage("/signup");
  };
  return (
    <section className="mb-[20px] mx-[40px]">
      <div className="container mx-auto text-center bg-[#F8D57E] py-16">
        <h2 className="text-xl mx-[15px] lg:text-3xl font-bold mb-4" style={{ color: '#333333' }}>
          Experience the best AI-powered tool in EMD
        </h2>
        <p className="text-lg mb-6 mx-[15px]">
          Transcend EMD Training. Master the Art of Dispatch with 911 Coach AI.
        </p>
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
  );
}

export default Cta;
