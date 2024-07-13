import React, { useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

function Faq() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section>
      <h2 className="text-[20px] text-center mb-[20px] font-bold leading-relaxed tracking-wide lg:text-[40px] mb-[20px]" style={{ color: '#333333' }}>
      Frequently Asked Questions
      </h2>
      <div className="w-full flex  flex-col justify-center items-center mb-[20px] gap-8 mr-[20px]">
        <Accordion
          className="border border-gray-300 w-full max-w-lg lg:max-w-[1200px]"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon className="text-gray-500" />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="bg-gray-100"
          >
            <p className="font-medium">
              What is EM-Buddy? How is it different from ChatGPT and similar
              tools?
            </p>
          </AccordionSummary>
          <AccordionDetails className="border-t border-gray-200 p-4">
            <p>
              Unlike general chatbots like ChatGPT, EM-Buddy isn't designed for
              casual conversation. It's a specialized AI assistant focused on
              emergency medical dispatch (EMD). EM-Buddy offers a curated
              knowledge base specifically tailored to EMD needs, including
              evidence-based Q&A, medical resources, and realistic simulation
              scenarios. It's your free training partner to become a more
              confident and effective emergency dispatcher
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="border border-gray-300 w-full max-w-lg  lg:max-w-[1200px]"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon className="text-gray-500" />}
            aria-controls="panel2d-content"
            id="panel2d-header"
            className="bg-gray-100"
          >
            <p className="font-medium">Can anyone use EM-Buddy?</p>
          </AccordionSummary>
          <AccordionDetails className="border-t border-gray-200 p-4">
            <p>
              Anybody can use the Alpha version of EM-Buddy completely for free.
              You just have to create an account.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="border border-gray-300 w-full max-w-lg   lg:max-w-[1200px]"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon className="text-gray-500" />}
            aria-controls="panel3d-content"
            id="panel3d-header"
            className="bg-gray-100"
          >
            <p className="font-medium">
              Are these all the features that EM-Buddy offers?
            </p>
          </AccordionSummary>
          <AccordionDetails className="border-t border-gray-200 p-4">
            <p>
              We're actively developing a beta version that will take things to
              the next level. Expect features like real-time audio scenarios for
              even more immersive training, and a whole lot more on the horizon.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
