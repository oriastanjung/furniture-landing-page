import React from "react";
import Marquee from "react-fast-marquee";
import icon1 from "../../assets/logos/airbnb.png";
import icon2 from "../../assets/logos/dunkin.png";
import icon3 from "../../assets/logos/netflix.png";
import icon4 from "../../assets/logos/walmart.png";
import icon5 from "../../assets/logos/amazon.png";
import icon6 from "../../assets/logos/squire.png";

function Partners() {
  return (
    <div className="mt-24 md:mt-64 border-t-[1px] border-b-[1px] mb-10 py-4 md:py-10 border-[#282828]">
      <h2 className="text-lg md:text-2xl text-center mb-20 text-[#282828] font-semibold">
        Product Partners
      </h2>
      <div>
        <Marquee pauseOnHover={true} loop={0} speed={250}>
          <img className="bg-cover bg-center md:h-16 h-14 hover:cursor-pointer border-2 border-transparent hover:border-black rounded-xl ml-20 py-3 px-4 aspect-w-16 aspect-h-9 " src={icon1} alt="" />

          <img className="bg-cover bg-center md:h-16 h-14 hover:cursor-pointer border-2 border-transparent hover:border-black rounded-xl ml-20 py-3 px-4 aspect-w-16 aspect-h-9 " src={icon2} alt="" />

          <img className="bg-cover bg-center md:h-16 h-14 hover:cursor-pointer border-2 border-transparent hover:border-black rounded-xl ml-20 py-3 px-4 aspect-w-16 aspect-h-9 " src={icon3} alt="" />

          <img className="bg-cover bg-center md:h-16 h-14 hover:cursor-pointer border-2 border-transparent hover:border-black rounded-xl ml-20 py-3 px-4 aspect-w-16 aspect-h-9 " src={icon4} alt="" />

          <img className="bg-cover bg-center md:h-16 h-14 hover:cursor-pointer border-2 border-transparent hover:border-black rounded-xl ml-20 py-3 px-4 aspect-w-16 aspect-h-9 " src={icon5} alt="" />

          <img className="bg-cover bg-center md:h-16 h-14 hover:cursor-pointer border-2 border-transparent hover:border-black rounded-xl ml-20 py-3 px-4 aspect-w-16 aspect-h-9 " src={icon6} alt="" />
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;
