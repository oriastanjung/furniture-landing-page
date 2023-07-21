import React from "react";
import ytIcon from "../../assets/icons/footer-youtube.png";
import pinterestIcon from "../../assets/icons/footer-pinterest.png";
import instagramIcon from "../../assets/icons/footer-instagram.png";
import twitterIcon from "../../assets/icons/footer-twitter.png";
function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-12 md:pt-24">
      <div className="container mx-auto px-5 md:px-0 flex flex-col gap-16 md:gap-0 md:flex-row pb-10 md:pb-20">
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl text-[#282828] cursor-pointer">Furniture</h1>
          <p className="text-sm md:text-lg text-[#404040] mt-2 md:mt-6">Brand of Indonesia</p>
          <div className="flex flex-row gap-3 md:gap-9 mt-5 md:mt-10">
            <img
              className="object-cover cursor-pointer object-center w-6"
              src={instagramIcon}
              alt=""
            />
            <img
              className="object-cover cursor-pointer object-center w-6"
              src={twitterIcon}
              alt=""
            />
            <img
              className="object-cover cursor-pointer object-center w-6"
              src={pinterestIcon}
              alt=""
            />
            <img
              className="object-cover cursor-pointer object-center w-6"
              src={ytIcon}
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-wrap md:flex-nowrap  md:gap-44">
          <div className="flex order-2 ml-36 md:ml-0 flex-col items-start">
            <h2 className="text-md md:text-lg text-[#282828] font-bold mb-4 md:mb-12">About</h2>
            <div className="flex flex-col gap-3 md:gap-9">
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Company</p>
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Designer</p>
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Features</p>
            </div>
          </div>
          <div className="flex order-1  flex-col items-start">
            <h2 className="text-md md:text-lg text-[#282828] font-bold mb-4 md:mb-12">Support</h2>
            <div className="flex flex-col gap-3 md:gap-9">
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">FAQ’s</p>
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Contact Us</p>
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Outlet</p>
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Warranty</p>
            </div>
          </div>
          <div className="flex order-3 mt-20 md:mt-0 flex-col items-start">
            <h2 className="text-md md:text-lg text-[#282828] font-bold mb-4 md:mb-12">Product</h2>
            <div className="flex flex-col gap-3 md:gap-9">
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Privacy Policy</p>
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Categories</p>
              <p className="text-sm md:text-lg text-[#404040] cursor-pointer hover:font-medium">Idea</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-0 md:mt-0 border-t-[1px] border-[#A5A5A5] py-5 md:py-20">
        <p className="text-[#404040] text-sm text-center md:text-left md:text-md">2022 Furniture. All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
