import React, { useState } from "react";
import ButtonWithoutArrow from "../ButtonWithoutArrow";
import NavTitle from "../NavTitle";
import hamburgerIcon from "../../assets/icons/hamburger.svg";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav
        className="md:static md:border-none border-b-[1px] border-slate-200 bg-white backdrop-filter backdrop-blur-md bg-opacity-30 py-4 md:py-0 px-3 md:px-0 fixed top-0 left-0 z-10 w-full flex flex-row items-center justify-between md:gap-[80px]"
      >
        <div className="flex flex-row items-center gap-[80px]">
          <NavTitle />
          <ul className="hidden md:flex flex-row gap-[80px]">
            <li className="cursor-pointer font-medium text-xl">Offer</li>
            <li className="cursor-pointer font-medium text-xl">Features</li>
            <li className="cursor-pointer font-medium text-xl">Idea</li>
            <li className="cursor-pointer font-medium text-xl">Product</li>
            <li className="cursor-pointer font-medium text-xl">Testimonial</li>
          </ul>
          {showMenu && (
            <div className="absolute top-0 h-screen bg-white w-full py-10 z-50">
              <div
                className="flex justify-end mr-10 "
                onClick={() => setShowMenu(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center ">
                <NavTitle />
                <h1 className="text-xl font-semibold">Furniture Web</h1>
              </div>
              <ul className="mt-24 flex flex-col gap-8 justify-center items-center">
                <li className="font-medium text-lg  hover:cursor-pointer hover:border-b-[1px] border-black">
                  Offer
                </li>
                <li className="font-medium text-lg hover:cursor-pointer hover:border-b-[1px] border-black">
                  Features
                </li>
                <li className="font-medium text-lg hover:cursor-pointer hover:border-b-[1px] border-black">
                  Idea
                </li>
                <li className="font-medium text-lg hover:cursor-pointer hover:border-b-[1px] border-black">
                  Product
                </li>
                <li className="font-medium text-lg hover:cursor-pointer hover:border-b-[1px] border-black">
                  Testimonial
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:block">
          <ButtonWithoutArrow>Login</ButtonWithoutArrow>
        </div>
        <div
          className="md:hidden cursor-pointer "
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
