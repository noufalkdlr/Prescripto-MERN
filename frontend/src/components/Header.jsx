import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 ">
        
      {/* ---- left side ----- */}

      <div className=" md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row gap-6 text-white items-center text-sm  ">
          <img src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br />{" "}
            schedule your appointment hassle-free.
          </p>
        </div>
        <a className="flex gap-3 bg-white text-gray-900 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300" href="#speciality">
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="" />{" "}
        </a>
      </div>

      {/* ---- Right side ----- */}

      <div className="md:w-1/2 relative">
        <img className="w-full 2xl:w-[90%] h-auto rounded-lg absolute bottom-0" src={assets.header_img} alt="" />
    </div>
    </div>
  );
};

export default Header;
