import React from "react";
import ButtonArrowOnly from "../ButtonArrowOnly";

function Card(props) {
  return (
    <div className="flex flex-col hover:mt-[-10px] hover:ease-in-out duration-300 justify-between outline outline-1 py-[30px] pl-[30px] pr-[17px] w-[285px] h-[400px] rounded-[20px]">
      <div className="w-[32px] h-[32px]">
        <img src={props.icon} alt="" />
      </div>
      <div className="mt-12">
        <h6 className="font-medium text-xl w-3/4">{props.title}</h6>
        <p className="text-sm font-normal mt-4 leading-[25px] w-100">
          {props.desc}
        </p>
      </div>
      <div className="flex flex-row items-end">
        <ButtonArrowOnly className={`${props.isActive ? "active" : ""}`} />
      </div>
    </div>
  );
}

export default Card;
