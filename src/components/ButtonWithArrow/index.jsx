import React from "react";
import arrowIcon from "../../assets/arrow.png";
function ButtonWithArrow(props) {
  return (
    <button className="bg-primaryGreen flex flex-row items-center py-2 px-1 md:py-[9px] md:pr-[38px]" {...props}>
      <img src={arrowIcon} className={'w-3 h-3 md:w-[23px] md:h-[16px]'} alt="" />
      <span className="ml-3 md:ml-[22px] text-sm md:text-xl font-medium">{props.children}</span>
    </button>
  );
}

export default ButtonWithArrow;
