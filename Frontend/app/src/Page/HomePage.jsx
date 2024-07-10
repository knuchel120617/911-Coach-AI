import React from "react";
import NavBar from "../Component/NavBar/NavBar";
import Hero from "../Component/Home/Hero";
import HowItWorks from "../Component/Home/HowITWorks";
import Faq from "../Component/Home/Faq";
import Cta from "../Component/Home/Cta";
import ContactUs from "../Component/Home/ContactUs";

function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Faq />
      <Cta />
      <ContactUs />
    </main>
  );
}

export default HomePage;
