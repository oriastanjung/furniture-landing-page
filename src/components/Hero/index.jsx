import React from "react";
import heroImg from "../../assets/hero-img.png"
import ButtonWithArrow from "../ButtonWithArrow";
import HeroStats from "../HeroStats";
function Hero() {
  return (
    <section className="flex flex-row items-start justify-between">
      <div className="flex flex-col">
        <h4 className="font-semibold text-7xl leading-[108px] w-[515px]">Make Your Place More Comfortable</h4>
        <p className="font-normal leading-[42px] w-[505px] text-[22px] mt-[20px]">
          Making a comfort is not just a word. Instead of producing a satisfying
          and quality product.
        </p>
        <div className="mt-16">
            <ButtonWithArrow>Get Started</ButtonWithArrow>
        </div>
        <div className="mt-14 flex flex-row gap-[70px]">
          <HeroStats title={'30k +'} desc={'Customers'}/>
          <HeroStats title={'5k +'} desc={'Awards'}/>
          <HeroStats title={'10k +'} desc={'Products'}/>
        </div>
      </div>
      <div className="pr-[3rem]">
        <img className="w-100 h-100" src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
