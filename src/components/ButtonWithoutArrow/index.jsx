import React from "react";

function ButtonWithoutArrow(props) {
  return (
    <button
      className={`${
        props.isDark
          ? "bg-[#303030] text-white"
          : "text-[#1B1B1B] bg-primaryGreen"
      } py-2 px-3 md:py-[9px] md:px-[36px]  font-medium text-sm md:text-base`}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default ButtonWithoutArrow;
