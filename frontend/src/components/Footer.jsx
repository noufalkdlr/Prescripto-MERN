import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className=" w-[80%] mx-auto mt-10 py-28">
        <div className="flex justify-between">
      <div className="w-1/3">
        <img className="pb-10 -mt-4" src={assets.logo} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div>
        <h3 className="pb-10">COMPANY</h3>
        <div className=" flex flex-col gap-6">
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div>
        <h3 className="pb-10">GET IN TOUCH</h3>
        <div className=" flex flex-col gap-6" >
          <p>+1-212-456-7890</p>
          <p>greatstackdev@gmail.com</p>
        </div>
      </div>
      </div>
      <div className="pt-6">
        <hr />
        <p className=" text-center mt-6">Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
