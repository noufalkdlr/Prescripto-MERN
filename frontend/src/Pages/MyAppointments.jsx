import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../context/AppContext";

const MyAppointments = () => {
  const { docId } = useParams();

  const { doctors } = useContext(appContext);

  const doc = doctors.find((doc) => doc._id === docId);


  return (  
      <div className="flex justify-center gap-5">
      <div>
        <img className=" bg-primary rounded-lg " src={doc.image} alt="" />
      </div>
      <div className=" flex flex-col justify-center gap-4 border rounded-xl py-10 px-8 w-2/4">
        <h1 className="font-bold text-4xl" >{doc.name}</h1>
        <p>{`${doc.degree} - ${doc.speciality} ${doc.experience}`}</p>
        <p>About</p>
        <p className="" >{doc.about}</p>
      </div>
      </div>
  );
};

export default MyAppointments;
