import React from "react";
import offerIcon from "../../assets/offer-icon.png";
import iconCard1 from "../../assets/icon-card1.png"
import iconCard2 from "../../assets/icon-card2.png"
import iconCard3 from "../../assets/icon-card3.png"
import Card from "../Card";
import SectionTitle from "../SectionTitle";


function Services() {
  return (
    <section className="mt-48 md:mt-48">
      <div className="flex items-center justify-center">
        <figure className="w-[130px] h-[36px]">
          {/* <img className="w-100 h-100" src={offerIcon} /> */}
          <SectionTitle>Offer</SectionTitle>
        </figure>
      </div>
      <div className="mt-16 flex flex-col items-center ">
        <h4 className="text-2xl md:text-6xl font-semibold">Our Service</h4>
        <p className="mt-10 md:w-[340px] text-md md:text-xl font-normal md:leading-[42px] text-center">
          The services you get when you use products from Furniture
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-16 md:mt-48 flex-wrap gap-[4rem]">
        <Card
          isActive
          icon={iconCard1}
          title={"Fast & Free Shipping"}
          desc={
            "Furniture serves wholeheartedly by shipping your product quicklyand free shipping"
          }
        />
        <Card
          
          icon={iconCard2}
          title={"Varied Prices"}
          desc={
            "There is a lot of furniture at various prices. adjust to your liking, to get theright price."
          }
        />
        <Card
          
          icon={iconCard3}
          title={"Friendly & Timely Service"}
          desc={
            "Our kind customer service ready to serve you anywhere and anytime."
          }
        />
      </div>
    </section>
  );
}

export default Services;
