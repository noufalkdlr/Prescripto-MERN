import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center py-40 gap-20 ">
      <div>
        <p className="text-center text-4xl font-semibold mb-6">Find by Speciality </p>
        <p className="text-center">Simply browse through our extensive list of trusted doctors, schedule <br /> your appointment hassle-free.</p>
      </div>
      <div className="flex gap-10 ">
        {specialityData.map((item, index) => (
            <div > 
            <Link to={`doctors/${item.speciality}`} className="flex flex-col gap-2 justify-center items-center hover:-translate-y-3 transition-all duration-300">
                 <img src={item.image} alt="" />
                 <p>{item.speciality}</p>
            </Link>
               
            
                
            </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
