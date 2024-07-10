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
        <div className="w-auto">
          <Buttons
            primary
            rounded
            className="text-white bg-[#10B981] px-4 py-2"
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
