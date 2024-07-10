import React from "react";
import Hero from "../Component/Home/Hero";
import HowItWorks from "../Component/Home/HowITWorks";
import Faq from "../Component/Home/Faq";

function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Faq />
    </main>
  );
}

export default HomePage;
