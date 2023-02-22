import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="container mx-auto pt-[2rem]">
      <header>
        <Navbar />
      </header>
      <main className="mt-[135px] px-[7rem]">
        <Hero />
        <Services />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
