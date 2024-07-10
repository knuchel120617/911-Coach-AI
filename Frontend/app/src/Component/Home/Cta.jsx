import React from "react";
import Buttons from "../Button/Buttons";

function Cta() {
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto text-center bg-[#f1fbf9] py-16">
        <h2 className="text-xl mx-[15px] lg:text-3xl font-bold mb-4">
          Experience the best AI-powered tool in EMD
        </h2>
        <p className="text-lg mb-6 mx-[15px]">
          Transcend EMD Training. Master the Art of Dispatch with EM-Buddy.
        </p>
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
  );
}

export default Cta;
