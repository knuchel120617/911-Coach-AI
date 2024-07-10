import React from "react";
import Hero from "../Component/Home/Hero";
import HowItWorks from "../Component/Home/HowITWorks";
import Faq from "../Component/Home/Faq";
import Cta from "../Component/Home/Cta";

function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Faq />
      <Cta />
    </main>
  );
}

export default HomePage;
