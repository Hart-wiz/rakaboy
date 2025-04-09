import React from "react";
import { icon } from "../assets/assets";

const Card = () => {
  return (
    <div className=" bg-gray-800 rounded-full text-white p-5   size-60  flex flex-col items-center justify-center gap-5 max-md:gap-0 max-md:size-30 ">
      <img src={icon[0].image} alt="" className="size-14 max-md:size-6" />
      <p className="text-sm leading-4  px-3 text-justify max-md:text-[0.5rem] max-md:px-0">
        {icon[0].text}
      </p>
    </div>
  );
};

export default Card;
