import React from "react";
import arrowIcon from "../../assets/arrow.png";
function ButtonWithArrow(props) {
  return (
    <button className="bg-primaryGreen flex flex-row items-center py-[9px] pr-[38px]" {...props}>
      <img src={arrowIcon} className={'w-[23px] h-[16px]'} alt="" />
      <span className="ml-[22px] text-xl font-medium">{props.children}</span>
    </button>
  );
}

export default ButtonWithArrow;
