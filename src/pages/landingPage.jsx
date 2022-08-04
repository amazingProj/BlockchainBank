import React, { useState } from "react";
import Header from "../components/landingPage/Header";
import HeroHome from "../components/landingPage/HeroHome";
import FeaturesHome from "../components/landingPage/Features";
import FeaturesBlocks from "../components/landingPage/FeaturesBlocks";
import Testimonials from "../components/landingPage/Testimonials";
import Newsletter from "../components/landingPage/Newsletter";
import Footer from "../components/landingPage/Footer";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
