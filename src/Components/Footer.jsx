import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <section id="Contact">
    <div  className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-xl md:2xl font-normal">Feel free to reach out</h3>
      </div>
      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:kritiyadav560@gmail.com" className="hover:underline">
            kritiyadav560@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin />
          <a 
            href="https://www.linkedin.com/in/kriti-yadav-165922213/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            linkedin.com/in/kriti-yadav-165922213
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub />
          <a 
            href="https://github.com/kritiydv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            github.com/kritiydv
          </a>
        </li>
      </ul>
    </div>
    </section>
   </>
  );
};

export default Footer;
