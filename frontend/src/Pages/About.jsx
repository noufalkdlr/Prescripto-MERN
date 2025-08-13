import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold py-8">ABOUT US</h1>
      <div className="flex gap-20 w-3/4">
        <img className="w-1/4 h-full" src={assets.about_image} alt="" />
        <div className="leading-8">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.{" "}
            <br />
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h4 className="py-8 font-semibold">Our Vision</h4>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="w-3/4 pt-14" >
        <h3 className="text-3xl font-normal mb-8">WHY CHOOSE US</h3>
        <div className="flex" >
          <div className=" border border-1 py-20 px-24">
            <h4 className="font-semibold mb-4">Efficiency</h4>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className=" border border-1 py-20 px-24">
            <h4 className="font-semibold mb-4">Convenience:</h4>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className=" border border-1 py-20 px-24">
            <h4 className="font-semibold mb-4">Personalization</h4>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
