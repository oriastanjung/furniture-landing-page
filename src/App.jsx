import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Features from "./components/Features";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="container mx-auto pt-[2rem] px-5 md:px-0">
      <header className="">
        <Navbar />
      </header>
      <main className="mt-16 md:mt-[135px] md:px-[7rem]">
        <Hero />
        <Services />
        <Features />
        <Partners />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
