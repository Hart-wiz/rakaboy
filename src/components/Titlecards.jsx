import React from "react";
import Card from "./Card";
import { icon } from "../assets/assets";

const Titlecards = () => {
  return (
    <div className="flex flex-col justify-center text-center ">
      <h1 className=" py-10 font-bold text-xl italic">What We Offer</h1>
      <div className="flex  gap-5 flex-wrap justify-center w-[60%] items-center  self-center max-md:w-full ">
        {icon.map((icon) => (
          <Card image={icon.image} text={icon.text} />
        ))}
      </div>
    </div>
  );
};

export default Titlecards;
