import React from "react";
import SectionTitle from "../SectionTitle";
import ButtonWithoutArrow from "../ButtonWithoutArrow";
import imageHouse from "../../assets/ideas-house.png";
import iconSpoon from "../../assets/ideas-spoon.png";
import iconHome from "../../assets/ideas-home.png";
import iconBook from "../../assets/ideas-book.png";

function IdeaSection() {
  return (
    <div className="px-5 md:px-0 container mx-auto my-48 md:my-64 flex flex-col items-center md:items-start">
      <div>
        <SectionTitle>Idea</SectionTitle>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="  flex flex-col items-center md:items-start w-full md:w-1/2">
          <h5 className="text-xl md:text-4xl font-bold text-[#282828] text-center md:text-left md:w-2/4 mt-6 md:mt-12 leading-10">
            interior design ideas
          </h5>
          <p className="md:text-left text-center md:w-9/12 mt-4 md:mt-8 font-normal text-sm md:text-xl leading-6 md:leading-10 text-[#404040]">
            Furniture displays several recommended ideas for you to implement
            into interior design using products from Furniture
          </p>
          <div className="mt-8 md:mt-16 mb-8 md:mb-0">
            <ButtonWithoutArrow>Explore Ideas</ButtonWithoutArrow>
          </div>
        </div>
        <div className="relative top-0 flex flex-col items-center justify-center md:block">
          <div className="bg-white border-[1px] overflow-hidden border-[#202020] w-3/4 md:w-full  rounded-2xl">
            <div className=" p-10 overflow-hidden md:w-[14rem]">
              <img
                className="object-cover object-center "
                src={imageHouse}
                alt=""
              />
            </div>
            <div className="bg-slate-200 w-full px-20 py-3 ">
              <p className="font-semibold text-sm text-center">House</p>
            </div>
          </div>
          <div className="absolute top-5 right-2 md:top-1/3 md:-left-36 z-[5] md:w-3/4 bg-white border-[1px] overflow-hidden border-[#202020] px-4 rounded-2xl flex flex-col items-start py-2">
            <p className="font-medium text-sm text-left">Category</p>
            <div className="flex flex-row gap-2 md:gap-4 mt-4">
              <div class="md:w-8 md:h-8 w-6 h-6 rounded-full overflow-hidden">
                <img
                  className="object-cover object-center"
                  src={iconSpoon}
                  alt=""
                />
              </div>
              <div class="md:w-8 md:h-8 w-6 h-6 rounded-full overflow-hidden">
                <img
                  className="object-cover object-center"
                  src={iconHome}
                  alt=""
                />
              </div>
              <div class="md:w-8 md:h-8 w-6 h-6 rounded-full overflow-hidden">
                <img
                  className="object-cover object-center"
                  src={iconBook}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaSection;
