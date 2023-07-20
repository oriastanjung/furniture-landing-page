import React from "react";
import heroImg from "../../assets/hero-img.png";
import ButtonWithArrow from "../ButtonWithArrow";
import HeroStats from "../HeroStats";
function Hero() {
  return (
    <section className="flex flex-col md:flex-row md:items-start items-center justify-center w-full md:justify-between">
      <div className="flex flex-col">
        <h4 className="font-semibold w-3/4 mt-8 md:mt-0 text-4xl md:text-7xl md:leading-[108px] md:w-[515px]">
          Make Your Place More Comfortable
        </h4>
        <p className="font-normal md:leading-[42px]  md:w-[505px] text-md md:text-[22px] mt-10 md:mt-[20px]">
          Making a comfort is not just a word. Instead of producing a satisfying
          and quality product.
        </p>
        <div className="md:mt-16 mt-12">
          <ButtonWithArrow>Get Started</ButtonWithArrow>
        </div>
        <div className="mt-14 flex flex-row justify-center md:justify-start gap-10 md:gap-[70px]">
          <HeroStats title={"30k +"} desc={"Customers"} />
          <HeroStats title={"5k +"} desc={"Awards"} />
          <HeroStats title={"10k +"} desc={"Products"} />
        </div>
      </div>
      <div className="flex md:justify-end mt-24 md:mt-0 md:pr-[3rem] w-3/4 md:w-full">
        <img className="md:w-100 h-100" src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
