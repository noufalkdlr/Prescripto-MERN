import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className=" relative flex px-40 justify-between items-center my-16 w-[90%]">
        <div className="flex flex-col gap-6 w-1/2 mt-16">
          <h1 className="text-5xl text-white font-bold leading-normal">
            Book Appointment <br />
            With 100+ Trusted Doctors
          </h1>
          <button className=" bg-[#EAEFFF] py-4 px-20  rounded-full w-72">
            Create account
          </button>
        </div>
        <div>
          <img className="" src={assets.appointment_img} alt="" />
        </div>

        <div className=" absolute bottom-0 left-0 -z-10 bg-primary w-full h-[89%] rounded-xl"></div>
      </div>
    </div>
  );
};

export default Banner;
