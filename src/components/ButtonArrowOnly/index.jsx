import React from 'react'
import arrowIcon from "../../assets/arrow.png"

function ButtonArrowOnly(props) {
  return (
    <button className={` flex items-center justify-center p-[10px] ${props.className === "active" ? "bg-primaryGreen" : "bg-[#eeeeee]"} hover:bg-primaryGreen ease-in-out duration-300`}>
        <img src={arrowIcon} alt="" />
    </button>
  )
}

export default ButtonArrowOnly