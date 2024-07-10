import React from "react";
import Hero from "../Component/Home/Hero";
import HowItWorks from "../Component/Home/HowITWorks";
import Faq from "../Component/Home/Faq";
import Cta from "../Component/Home/Cta";
import ContactUs from "../Component/Home/ContactUs";

function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Faq />
      <Cta />
      <ContactUs />
    </main>
  );
}

export default HomePage;
