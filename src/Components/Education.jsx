import React from 'react'
import AboutImg from "../assets/7358653-removebg-preview.png"
import { IoArrowForward } from "react-icons/io5"

const Education = () => {
  return (
    <>
    <section id="Education">
    <div  className="text-white flex flex-wrap md:flex-nowrap bg-black shadow-xl mx-0 md:mx-10 bg-opacity-30 rounded-lg p-12">
      
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img className="h-80" src={AboutImg} alt="about img" />
      </div>

      {/* Right Side: Education Details */}
      <div className="w-full md:w-2/3 pl-10">
        <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
        <ul className="mt-6 space-y-4">  
          {[
            { title: "Master of Computer Applications | 2023 - Present", moreDesc: "Bhilai Institute of Technology, Durg, Chhattisgarh" },
            { title: "Bachelor of Computer Applications | 2020 - 2023", moreDesc: "Rungta College Of Science and Technology, Bhilai" },
            { title: "Senior Secondary (XII) | 2019 - 2020", moreDesc: "Delhi Public School, Durg, Chhattisgarh", desc: "88.2% (Commerce + Mathematics)" }
          ].map((item, index) => (
            <div key={index} className="flex gap-3">
              <IoArrowForward size={30} className="mt-1" />
              <div>
                <h1 className="text-xl md:text-xl font-bold">{item.title}</h1>
                {item.desc && <p className="text-sm md:text-md">{item.desc}</p>}
                <p className="text-sm md:text-md">{item.moreDesc}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
   </section>
    </>
  )
}

export default Education
