import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Features from "./components/Features";
import Partners from "./components/Partners";
import IdeaSection from "./components/IdeaSection";
import ProductSection from "./components/ProductSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" pt-[2rem] ">
      <header className="container mx-auto px-5 md:px-0">
        <Navbar />
      </header>
      <main className="mt-16 md:mt-[135px]">
        <Hero />
        <Services />
        <Features />
        <IdeaSection />
        <ProductSection />
        <Partners />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
