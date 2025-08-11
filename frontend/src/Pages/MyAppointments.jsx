import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../context/AppContext";
import RelatedDoctors from "../components/RelatedDoctors";

const MyAppointments = () => {
  const { docId } = useParams();

  const { doctors, currencySymbol } = useContext(appContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = () => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
    console.log(docSlots);
  }, [docInfo]);

  if (!docInfo) {
    return <p className="text-center py-10">Loading doctor info...</p>;
  }
  return (
    <div>
      <div className="flex justify-center gap-5">
        <div>
          <img className=" bg-primary rounded-lg " src={docInfo.image} alt="" />
        </div>
        <div className=" flex flex-col justify-center gap-4 border rounded-xl py-10 px-8 w-2/4">
          <h1 className="font-bold text-4xl">{docInfo.name}</h1>
          <p>{`${docInfo.degree} - ${docInfo.speciality} ${docInfo.experience}`}</p>
          <p>About</p>
          <p className="">{docInfo.about}</p>
          <p>
            Appointment Fee:
            <span className="font-bold">{`${currencySymbol}${docInfo.fees}`}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-[36%] mt-10 gap-8 w-2/4">
        <p>Booking Slot</p>
        <div className="flex gap-5 w-full">
          {docSlots.length &&
            docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`border w-16 py-6 rounded-full flex flex-col font-medium items-center cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : " text-neutral-700"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))}
        </div>
        <div
          className="flex flex-shrink-0 gap-5 w-full overflow-x-scroll cursor-pointer items-center scrollbar-hide "
          onWheel={(e) => {
            if (e.deltaY !== 0) {
              e.preventDefault();
              e.currentTarget.scrollLeft += e.deltaY;
            }
          }}
          style={{ overscrollBehavior: "contain" }}
        >
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`whitespace-nowrap inline-block border border-neutral-200 px-6 py-2 rounded-full ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : " text-neutral-600"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <div>
          <button className="bg-primary text-white px-12 py-4 rounded-full">Book an appointment</button>
        </div>
        
      </div>
      <RelatedDoctors doc={docInfo}/>
      
    </div>
  );
};

export default MyAppointments;
