import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className=" font-medium text-3xl py-6 mb-4">CONTACT US</h1>
      <div className="flex justify-center gap-14 items-center">
        <img className="w-1/3 h-full" src={assets.contact_image} alt="" />
        <div className="flex flex-col gap-5">
          <h4 className="text-xl font-medium">Our OFFICE</h4>
          <p>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555‑0132 <br />
            Email: greatstackdev@gmail.com
          </p>
          <h4 className="text-xl font-medium" >Careers at PRESCRIPTO</h4>
          <p>Learn more about our teams and job openings.</p>
          <button className="-100 w-fit px-8 py-4 border border-neutral-800 ">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
