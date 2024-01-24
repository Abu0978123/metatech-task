import React from "react";
import { FaAward } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section class="bg-white py-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <div class="lg:w-1/2 mb-8 lg:mb-0">
              <img src="/dr.png" alt="About Us" class="w-full rounded-md mb-7" />

              {/* timing */}
              <div className="w-73 h-73 bg-blue-50 rounded-md mb-7">
                <div className="flex flex-col items-center  ">
                  <div className="p-3">
                    <MdOutlineAccessTime fontSize={80} color="RoyalBlue" />
                  </div>
                  <div className="text-black">
                    <h3>Opening Table</h3>
                  </div>
                  <div>
                    <table class="table-auto flex ">
                      <tbody>
                        <tr className="flex justify-between border-b-2">
                          <td>Monday Friday</td>
                          <td>6:00 - 7:00 pm </td>
                        </tr>
                        <tr className="flex justify-between border-b-2">
                          <td>Saturday</td>
                          <td>8:00 - 9:00 pm</td>
                        </tr>
                        <tr className="flex justify-between border-b-2">
                          <td>Sunday </td>
                          <td>Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* My Health Care Support */}

              <div className="w-73 h-73 bg-blue-600 p-10 mb-20  mt-5 text-white rounded">
                <h5>My Health Care Support</h5>
                <h6 className="py-3">Services</h6>
                <p>
                  
                  <strong>Call</strong> : +324756953658
                </p>
                <p>
                  
                  <strong>Mail</strong> : healthCare.com
                </p>
                <p>
                  
                  <strong>Address</strong> : 12475 North lane jal, South
                  nella,IN 444
                </p>
                <div className="flex flex-row text-white text-3xl">
                  <CiTwitter className="mr-3" />
                  <FaInstagram className="mr-3" /> <FaFacebook />
                </div>
              </div>

              {/* doctor data */}
            </div>
            <div class="lg:w-1/2 pl-7 mb-8 lg:mb-0 flex md:block ">
              <div className="flex  items-start justify-between">
                <h1>Dr Ranbir Singh</h1>
                <button className='class="bg-blue-500 bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700  rounded ml-3'>
                  Book Appointment
                </button>
              </div>
              <div>
                <h4>General Surgeon</h4>
              </div>
              <div>
                <p>
                  Dr. Mantooth has done Basic and Advanced training in
                  Reproductive Medicine and IVF Homerton University hospital
                  London UK. He is an active member of London Fertility Society
                  and has helped in conducting workshops in IFS conference.
                </p>
              </div>
              <div>
                <h3 className="py-5">Honors and Awards</h3>
              </div>

              <div className="flex ">
                <div className="w-40 h-40 border   mr-4">
                  <div className="text-center ">
                    <FaAward className="text-6xl text-blue-400 pl-5 p-2" />
                  </div>
                  <div>
                    2016 Best Skincare Treatment Winning Trophy & Recognition
                  </div>
                </div>
                <div className="w-40 h-40 border">
                  <div className="text-center ">
                    <FaAward className="text-6xl text-blue-400 pl-5 p-2" />
                  </div>
                  2020 World Health Organization Vaccine Research Award
                </div>
              </div>

              <div className="mt-4">
                <h2>Skillset</h2>
                <strong>HTML</strong>
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-66">
                  100%
                </div>
                <strong>css</strong>
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-66">
                  100%
                </div>
                <strong>JS</strong>
                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-66">
                  100%
                </div>
              </div>

              {/* Specialty */}

              <div className="edu w-90 mt-12 flex p-3 gap-6  flex-row">
                <div>
                  <h5>Specialty</h5>
                </div>
                <div className="mt-1">
                  <CiStar color="blue" size={13} />
                </div>
                <div>
                  
                  <p> Gynecologist</p>
                </div>
              </div>

              {/* Education */}
              <div className="edu w-90 mt-12 flex p-3 gap-6  flex-row">
                <div>
                  <h5>Education</h5>
                </div>

                <div>
                  
                  <li>Doctor of Medicine, University of texas, USA (1990) </li>
                  <li>Embryologys</li>
                  <li>
                    
                    Medical Orientation Program, St. Louis University (St.
                    Louis, Missouri 1996)
                  </li>
                </div>
              </div>

              {/* experience */}
              <div className="edu w-90 mt-12 flex p-3 gap-6  flex-row">
                <div>
                  <h5>Experience</h5>
                </div>

                <div>8+ Year of experience in medicine</div>
              </div>

              {/* recommended college doctors */}
              <div className="mt-7">
                <div className="text-2xl">
                  <b>Recommended</b> Colleague Doctors
                </div>
                <div className="flex flex-row gap-6 relative">
                  <div className="picture">
                    <img
                      src="/dr2.jpg"
                      alt="About Us"
                      class="w-full rounded-md"
                    />
                  </div>
                  <div className="picture">
                    <img
                      src="/dr1.png"
                      alt="About Us"
                      class="w-full rounded-md"
                    />
                  </div>
                  <div className="picture">
                    <img
                      src="/female-dr.jpg"
                      alt="About Us"
                      class="w-full rounded-md"
                    />
                  </div>

                  <div className="arrow absolute">
                    <FaArrowAltCircleRight  size={60}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-500 h-24"></div>
    </>
  );
};

export default About;
