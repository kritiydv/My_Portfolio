import React from 'react'
import { IoArrowForward } from "react-icons/io5"
import Logo1 from '../assets/AimSoft.png'

const Experience = () => {
  return (
    <>
    <section id="Experience">
    <div  className="text-white flex flex-wrap md:flex-nowrap bg-black shadow-xl mx-0 md:mx-10 bg-opacity-30 rounded-lg p-12">
    {/* Left Side: Experience Details */}
    <div className="w-full md:w-2/3 pl-10 flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl font-bold">Experience</h2>
      <ul className="mt-4 space-y-2">
        {[
          { title: "Internship", desc: "AimSoft Technologies, Durg, Chhattisgarh", moreDesc: "February 2025 - Present" },
        ].map((item, index) => (
          <div key={index} className="flex gap-3">
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className="text-3xl md:text-3xl font-bold">{item.title}</h1>
              {item.desc && <p className="text-xl">{item.desc}</p>}
              <p className="text-xl">{item.moreDesc}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  
    {/* Right Side: Image */}
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <img className="h-10 md:h-14" src={Logo1} alt="Company Logo" />
    </div>
  </div>
  </section>
   </>
  
      )
    }
  
export default Experience