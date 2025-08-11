import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../context/AppContext";
import { useNavigate,Link } from "react-router-dom";

const RelatedDoctors = ({ doc }) => {
  const { doctors } = useContext(appContext);

  const [relatedDoc, setRelatedDoc] = useState([]);

  const navigate = useNavigate();

  const relatedDoctors = () => {
    const relDoc = (doctors || [])
      .filter((item) => item.speciality === doc.speciality)
      .filter((item) => item._id !== doc._id);

    setRelatedDoc(relDoc);
  };

  useEffect(() => {
    relatedDoctors();
  }, [doctors, doc]);

  if (!relatedDoc.length) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col items-center pt-28">
      <div className="flex flex-col text-center pb-20 gap-4">
        <h1 className="font-semibold text-4xl">RelatedDoctors</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className="flex justify-center gap-4 ">
        {relatedDoc.map((item, index) => (
          <Link to ={`/appointments/${item._id}`}
            key={item._id}
            onClick={() => window.scrollTo(0, 0)}
            className="bg-[#EAEFFF] w-[300px] h-[400px] relative border border-[#EAEFFF] rounded-lg overflow-hidden mb-2 hover:-translate-y-2 transition-all duration-300"
          >
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
    </div>
  );
};

export default RelatedDoctors;
