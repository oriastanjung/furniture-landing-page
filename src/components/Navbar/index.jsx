import React from "react";
import ButtonWithoutArrow from "../ButtonWithoutArrow";
import NavTitle from "../NavTitle";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between gap-[80px]">
      <div className="flex flex-row items-center gap-[80px]">
        <NavTitle />
        <ul className="flex flex-row gap-[80px]">
          <li className="font-medium text-lg">Offer</li>
          <li className="font-medium text-lg">Features</li>
          <li className="font-medium text-lg">Idea</li>
          <li className="font-medium text-lg">Product</li>
          <li className="font-medium text-lg">Testimonial</li>
        </ul>
      </div>
      <div>
        <ButtonWithoutArrow>Login</ButtonWithoutArrow>
      </div>
    </div>
  );
}

export default Navbar;
