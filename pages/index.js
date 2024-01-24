import React from "react";
import About from "./about";
import Contact from "./newsletter";
import { FaGreaterThan } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <>
      <section className="bg-blue-100 h-60 flex justify-center text-3xl items-center relative">
        <div>
          <h1 className="pl-12">Doctor Detail</h1>
          <h5 className="flex">
            Home <FaGreaterThan className="mt-1" /> Physical-Appointment
            <FaGreaterThan className="mt-1" />
            Cardiologist
          </h5>
        </div>

        <div className="doctor">
          <FaStethoscope />
        </div>
        <div className="plus">
          <FaPlus />
        </div>
      </section>

      <About />
      <Contact />
    </>
  );
};

export default Index;
