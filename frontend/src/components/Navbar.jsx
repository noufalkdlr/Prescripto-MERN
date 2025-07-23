import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img src={assets.logo} className="w-44 cursor-pointer" alt="" />
      <ul className="hidden md:flex gap-5 font-medium">
        <NavLink to='/' className={({isActive}) => isActive ? 'text-primary' : ''}>
          <li>Home</li>
          
        </NavLink>
        <NavLink to='/doctors' className={({isActive}) => isActive ? 'text-primary' : ''}>
          <li>All Doctors</li>
          
        </NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-primary' : ''}>
          <li>About</li>
          
        </NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? 'text-primary' : ''}>
          <li>Contact</li>
          
        </NavLink>
      </ul>
      <div className="flex gap-4">
        <button onClick={()=> navigate('/login')} className="hidden md:block bg-primary text-white py-3 px-6 rounded-full">Create Accout</button>
        </div>
    </div>
  );
};

export default Navbar;
