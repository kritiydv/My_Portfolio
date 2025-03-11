
import React from 'react'
import{FaCss3,FaHtml5 ,FaJs, FaReact,FaNodeJs ,FaPython } from "react-icons/fa"
import { FaC } from "react-icons/fa6";
import { SiMongodb } from 'react-icons/si'


const Skills = () => {
  return (
    <div id="Skills" className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills/Certifications</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <span className='p-3 bg-zinc-950 flex flex-col items-center  rounded-2xl'>
                <FaHtml5 color='#e34f26'size={50}/>
                <span className="text-white mt-2 text-sm">HTML5</span> 
                </span>
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaCss3 color='#1572b6'size={50}/>
                <span className="text-white mt-2 text-sm">CSS3</span>
                </span>
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaReact color='#61dafb'size={50}/>
                <span className="text-white mt-2 text-sm">React</span>
                </span>
                
                <span className='p-3 bg-zinc-950 flex  flex-col items-center rounded-2xl'>
                <FaC color='#f7df1e'size={50}/>
                <span className="text-white mt-2 text-sm">C/C++</span>
                </span>
                <span className='p-3 bg-zinc-950 flex  flex-col items-center rounded-2xl'>
                <FaJs color='#f7df1e'size={50}/>
                <span className="text-white mt-2 text-sm">Js</span>
                </span>
                
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <SiMongodb color='#47a248'size={50}/>
                <span className="text-white mt-2 text-sm">MongoDb</span>
                </span>
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaNodeJs  color='#ff4438'size={50}/>
                <span className="text-white mt-2 text-sm">NodeJs</span>
                </span>
               
                <span className='p-3 bg-zinc-950 flex flex-col items-center rounded-2xl'>
                <FaPython  color='#4285f4'size={50}/>
                <span className="text-white mt-2 text-sm">Python</span>
                </span>
                </div>
                <div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                
                    
                    <FaPython color='#4285f4' size={50}/>
                    <span className='text-white'>
                        <h2 className='leading-tight'>Python Certification Course</h2>
                        <p className='text-sm leading-tight font-thin'>April 2023 - June 2023</p>
                        <ul className='text-sm p-2'>
                            <li>- Python Basics</li>
                           
                            
                        </ul>
                    </span>
                </div>

                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                    <FaReact color='#61dafb' size={50}/>
                    <span className='text-white'>
                        
                        <h2 className='leading-tight'>React Native Certification</h2>
                        <p className='text-sm leading-tight font-thin'>April 2022 - July 2022</p>
                        <ul className='text-sm p-2'>
                            <li>- React and ReactNative Basics</li>
                            
                            
                        </ul>
                    </span>
                </div>

                
                </div>
        </div>
    </div>
  )
}

export default Skills