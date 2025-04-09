import React from "react";

const Card = ({ image, text }) => {
  return (
    <div className=" bg-gray-800 rounded-full text-white p-5   size-60  flex flex-col items-center justify-center gap-5 max-md:gap-0  ">
      <img src={image} alt="" className="size-14 " />
      <p className="text-sm leading-4  px-3 text-center  ">{text}</p>
    </div>
  );
};

export default Card;
