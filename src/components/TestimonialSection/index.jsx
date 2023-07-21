import React from "react";
import SectionTitle from "../SectionTitle";
import imageTestimonial from "../../assets/testimonial-img.png";
import imageTestimonialRight from "../../assets/testimonial-right-card.png";
import imageTestimonialLeft from "../../assets/testimonial-left-card.png";
import ButtonWithoutArrow from "../ButtonWithoutArrow";
function TestimonialSection() {
  return (
    <div>
      <div className="mt-24 md:mt-48 py-24 bg-[#F9F9F9] ">
        <div className="container mx-auto px-5 md:px-0 flex flex-col items-center md:items-start">
          <div>
            <SectionTitle>Testimonial</SectionTitle>
          </div>
          <div className="mt-10 flex flex-col-reverse md:flex-row items-center justify-center md:items-start md:justify-start">
            <div className="flex flex-col justify-center items-center">
              <h6 className="text-center md:text-left font-bold text-lg md:text-4xl text-[#282828] mt-10 md:mt-0">
                Steve Kenric
              </h6>
              <p className="text-center md:text-left text-sm md:text-xl text-[#404040] md:w-2/5 leading-6 md:leading-10 mt-5 md:mt-10">
                “Products from furniture are very soft when sitting for a long
                time. It really helps me in doing my job for a long time.”
              </p>
              <p className="text-center md:text-left text-[#282828] font-medium text-sm md:text-xl mt-9">
                Staffwork at Meta
              </p>
            </div>
            <div className="w-2/3 md:w-1/6 md:-mt-16">
              <img
                className="object-cover object-center"
                src={imageTestimonial}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-0 my-24 md:my-64">
        <div className="flex flex-row overflow-hidden relative top-0 border-[1px] border-[#202020] rounded-[32px] py-5 md:py-20">
          <div className="absolute flex justify-start top-0 left-0">
            <img
              className="object-cover w-1/6 md:w-1/4"
              src={imageTestimonialLeft}
              alt=""
            />
          </div>
          <div className="relative w-full text-center flex flex-col gap-10 md:gap-12 justify-center items-center">
            <p className="font-semibold text-md md:text-2xl leading-6 md:leading-10">
              Let's make your place more <br />
              comfortable with Furniture
            </p>
            <ButtonWithoutArrow isDark>Get Started</ButtonWithoutArrow>
          </div>
          <div className="flex justify-end absolute bottom-0 right-0">
            <img
              className="w-1/6 md:w-1/4"
              src={imageTestimonialRight}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
