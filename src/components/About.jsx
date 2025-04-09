import React from "react";
import { about } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div
        id="about"
        className="flex justify-center items-center max-md:flex-col max-md:px-30 py-9"
      >
        <h1 className="font-bold text-lg md:hidden ">About Us</h1>
        <div>
          <img src={about.image} alt="" />
        </div>
        <div className="w-[500px] max-md:w-[300px]">
          <h1 className="font-bold text-lg max-md:hidden ">About Us</h1>
          <p className="text-justify max-md:text-sm">{about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
