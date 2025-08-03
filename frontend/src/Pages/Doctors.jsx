import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appContext } from "../context/AppContext";
import { doctors } from "../assets/assets_frontend/assets";

const Doctors = () => {
  const { speciality } = useParams();

  const { doctors } = useContext(appContext);

  const [filterDoc, setFilterDoc] = useState([]);
  const [docCategory, setDocCategory] = useState(doctors)

  const navigate = useNavigate();

  const docFilter = ()=>{
    const doctor = doctors.filter((doc)=> doc.speciality.toLowerCase() === speciality.toLowerCase())
    return setFilterDoc(doctor)
    
  }

  const applyFilter = () => {
      if(!speciality){
        setFilterDoc(doctors)
      }else{
        docFilter()
      }
  };

  const specialityFilter = ()=>{

    let specialties = docCategory.map(item => item.speciality)
    specialties = [...new Set(specialties)]

    console.log(specialties)
    return specialties
  }

  const showSpecialityOnly = (selectedSpeciality)=>{
      if(selectedSpeciality){
        setFilterDoc(doctors.filter((item)=> item.speciality === selectedSpeciality))
        navigate(`/doctors/${selectedSpeciality}`);
      }
  }

  useEffect(() => {applyFilter()}, [doctors]);

  return (
    <div className="  w-[95%] mx-auto ">
      <p>Browse through the doctors specialist.</p>
      <div className="flex pt-10 gap-10 w-full">
        <div>
            <p onClick={()=> setFilterDoc(doctors)} className="cursor-pointer px-8 py-3 border border-neutral-300 mb-4 text-center rounded-md">All Doctors</p>
          {specialityFilter().map((item, index) =>(
            <p onClick={()=> showSpecialityOnly(item)} className=" cursor-pointer px-8 py-3 border border-neutral-300 mb-4 text-center rounded-md">{item}</p>
          ))}
            
        </div>
        <div className="grid grid-cols-5 gap-6  ">
          {filterDoc.map((item, index) => (
            
            <div onClick={()=> navigate(`/appointments/${item._id}`)} className="bg-[#EAEFFF] w-[300px] h-[400px] relative border border-[#EAEFFF] rounded-lg overflow-hidden mb-2 hover:-translate-y-2 transition-all duration-300">
              <div className="absolute bottom-28">
                <img className="w-full h-auto" src={item.image} alt="" />
              </div>
              <div className="bg-white absolute bottom-0 right-0 w-full py-8 flex flex-col justify-center pl-4">
                <p>{item.name}</p>
                <p>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
