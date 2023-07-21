import React from "react";
import SectionTitle from "../SectionTitle";
import ButtonWithoutArrow from "../ButtonWithoutArrow";
import imageProduct from "../../assets/product-img.png";

function ProductSection() {
  return (
    <div className="px-5 md:px-0 container mx-auto my-48 md:my-64 flex justify-center items-center md:items-start">
      <div className="flex flex-col-reverse md:flex-row justify-between items-end gap-20 md:gap-0">
        <div className="relative top-0 flex flex-col items-center justify-center md:block">
          <div className="bg-white border-[1px] overflow-hidden border-[#202020] w-3/4 md:w-full  rounded-2xl">
            <div className=" w-full pl-10 py-3 ">
              <p className="font-medium text-sm md:text-lg text-left text-[#282828]">Quality</p>
              <p className="font-semibold text-lg md:text-2xl text-left mt-1 text-[#383838]">5* Stars</p>
            </div>
            <div className=" px-5 pb-4 overflow-hidden md:w-[14rem]">
              <img
                className="object-cover object-center "
                src={imageProduct}
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-5 right-2 md:-top-8 md:left-44 z-[5] md:w-3/4 bg-white border-[1px] overflow-hidden border-[#202020] px-4 rounded-lg flex flex-col items-start py-2">
            <p className="font-medium text-xs text-left text-[#282828]">Total</p>
            <p className="font-semibold text-xl md:text-3xl text-left mt-1 text-[#383838]">10k+ <span className="font-normal text-xs md:text-sm md:ml-1 text-[#282828]">Product</span></p>

          </div>
        </div>
        <div className="  flex flex-col items-center md:items-start w-full md:w-1/2">
          <div>
            <SectionTitle>Product</SectionTitle>
          </div>
          <h5 className="text-xl md:text-4xl font-bold text-[#282828] text-center md:text-left  mt-6 md:mt-12 leading-10">
            Complete & Quality
          </h5>
          <p className="md:text-left text-center md:w-10/12 mt-4 md:mt-8 font-normal text-sm md:text-xl leading-6 md:leading-10 text-[#404040]">
            In Furniture, there are lots of products that we have and various
            designs with many complete products in each type and quality
            products
          </p>
          <div className="mt-8 md:mt-16 mb-8 md:mb-0">
            <ButtonWithoutArrow>See Product’s</ButtonWithoutArrow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
