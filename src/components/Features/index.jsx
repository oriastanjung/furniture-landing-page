import React from "react";
import SectionTitle from "../SectionTitle";
import ButtonWithoutArrow from "../ButtonWithoutArrow";
import vaseImg from "../../assets/features-vase.png";
import vaseImgFill from "../../assets/features-vase-filled.png";
import plusCircle from "../../assets/bx-plus-circle.png";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

function Features() {
  return (
    <div className="px-5 md:px-0 container mx-auto md:mt-64 mt-48 flex flex-col-reverse md:flex-row">
      <div className="flex flex-col items-center md:items-start gap-64 md:gap-24 md:w-2/3">
        <div className="flex flex-col md:flex-row relative top-0">
          <div className="flex flex-col items-center md:justify-center border-2 border-[#242424] overflow-hidden  rounded-2xl">
            <p className="font-semibold text-[#2F2F2F] text-md md:text-lg bg-[#EFEFEF] w-full px-16 py-4">
              1. Body Vase
            </p>
            <div className="md:w-full flex md:justify-center md:items-center">
              <img
                className="w-[8rem] md:w-[14rem] bg-cover bg-center"
                src={vaseImg}
                alt=""
              />
            </div>
          </div>
          <div className="absolute w-full top-[110%] md:top-[25%] md:left-[80%] bg-white z-[1] flex flex-col gap-6 items-center justify-center border-2 border-[#242424] overflow-hidden  rounded-2xl">
            <p className="font-semibold text-[#2F2F2F] text-md md:text-lg  px-8 md:px-16 py-4">
              Color
            </p>
            <div className="flex flex-row gap-2 md:gap-4">
              <div class="md:w-8 md:h-8 w-6 h-6 rounded-full bg-[#C4C0BF]"></div>
              <div class="md:w-8 md:h-8 w-6 h-6 rounded-full bg-[#FFCC9D]"></div>
              <div class="md:w-8 md:h-8 w-6 h-6 rounded-full bg-[#248C54]"></div>
              <img
                class="md:w-8 md:h-8 w-6 h-6 rounded-full bg-cover bg-center "
                src={plusCircle}
              />
            </div>
            <div className="flex w-full justify-around items-center">
              <img className="w-8 h-8" src={leftArrow} alt="" />
              <p>1 of 4</p>
              <img className="w-8 h-8" src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex flex-col items-center justify-center border-2 border-[#242424] overflow-hidden  rounded-2xl">
            <p className="font-semibold text-center py-4 text-[#2F2F2F] text-lg bg-[#EFEFEF] w-full">
              Preview
            </p>
            <div className="w-full flex justify-center items-center">
              <img
                className="w-[14rem] bg-cover bg-center"
                src={vaseImgFill}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:ml-[15rem] w-full md:w-3/3 md:items-start items-center gap-8 md:gap-16">
        <div className="">
          <SectionTitle>Features</SectionTitle>
        </div>
        <div className="flex flex-col justify-start gap-8 md:gap-10">
          <h6 className="text-[#282828] text-xl text-center md:text-left md:text-4xl font-bold">
            CustoMix Product
          </h6>
          <p className="leading-6 md:leading-10 text-[#404040] text-sm md:text-xl font-normal w-full md:w-3/4 text-center md:text-left">
            We provide several parts of the product with a very simple design
            but still displays an elegant impression for you to choose from.
          </p>
          <div className="text-center md:mt-24 mt-5 md:mb-0 mb-10">
            <ButtonWithoutArrow>Try Custom</ButtonWithoutArrow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
