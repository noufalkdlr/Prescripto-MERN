import React, { useContext } from "react";
// import { doctors } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
import { appContext } from "../context/AppContext";

const TopDoctors = () => {

  const {doctors} = useContext(appContext);

  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <h1 className="text-center text-3xl font-semibold">
          Top Doctors to Book
        </h1>
        <p className="text-center">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-6 w-2/3 ">
        {doctors.slice(0, 10).map((item, index) => (
          <Link to='' className="bg-[#EAEFFF] max-w-[300px] h-[400px] relative border border-[#EAEFFF] rounded-lg overflow-hidden mb-2 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute bottom-28">
              <img className="w-full h-auto" src={item.image} alt="" />
            </div>
            <div className="bg-white absolute bottom-0 right-0 w-full py-8 flex flex-col justify-center pl-4">
              <p>{item.name}</p>
              <p>{item.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
      <button className=" bg-[#EAEFFF] py-4 px-20  rounded-full">More</button>
    </div>
  );
};

export default TopDoctors;
