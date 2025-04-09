import React from "react";
import { header } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex bg-gradient-to-br from-black to-gray-600 h-screen  justify-center items-center max-lg:flex-col gap-6 pt-16">
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
          <a href="https://wa.me/23408145581961">
            <button className="bg-amber-600  p-3 hover:bg-amber-800 text-xl cursor-pointer hover:opacity-90">
              connect with Raph
            </button>
          </a>
          <a href="#portfolio">
            <button className="bg-blue-700 p-3 px-7 cursor-pointer hover:bg-blue-950 hover:opacity-90 text-xl">
              Gallery
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
