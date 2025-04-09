import React from "react";
import { header } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex bg-black h-screen  justify-center items-center max-lg:flex-col gap-6">
      <div className="bg-white rounded-full p-3  ">
        <img
          src={header.image}
          alt="logo"
          className="rounded-full w-90 max-md:w-40"
        />
      </div>
      <div className="z-40 text-white w-[50%] text-center max-md:w-auto max-md:px-0.5">
        <h1 className="font-extrabold text-6xl  max-md:font-bold max-md:text-3xl">
          {header.title}
        </h1>
        <p className=" text-3xl pt-3 italic max-md:text-2xl">
          {header.description}
        </p>
        <div className=" flex gap-9 mt-6 justify-center font-bold">
          <button className="bg-amber-600  p-3 ">connect to Raph</button>
          <button className="bg-blue-700 p-3 px-7">Gallery</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
