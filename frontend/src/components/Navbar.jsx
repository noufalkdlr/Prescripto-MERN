import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=> navigate('/')} src={assets.logo} className="w-44 cursor-pointer" alt="" />
      <ul className="hidden md:flex gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <li>All Doctors</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="flex gap-4">
        {token ? (
          <div className="flex gap-2 items-center cursor-pointer group relative">
            <img className="w-8 rounded-xl" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className=" absolute top-0 right-0 pt-16 hidden group-hover:block ">
              <div className="min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p className=" hover:text-primary cursor-pointer " onClick={ () =>  navigate('/my-profile')}>My Profile</p>
                <p className=" hover:text-primary cursor-pointer " onClick={ () =>  navigate('/my-appointments')}>My Appointments</p>
                <p className=" hover:text-primary cursor-pointer " onClick={()=> setToken(false)}>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-primary text-white py-3 px-6 rounded-full"
          >
            Create Accout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
