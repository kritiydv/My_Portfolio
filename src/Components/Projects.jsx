import React from 'react';
import ProjectCard from './ProjectCard';

// Import images from assets
import savings from '../assets/savings.jpg'
import voice from '../assets/voice.jpg'
import portfolio from '../assets/portfolio.png'

const Projects = () => {
  return (
    <>
    <section id="Projects">
    <div  className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-8 justify-center">

      <ProjectCard 
          title="Portfolio Website" 
          date="February 2025"
          main="A portfolio website" 
          desc="A responsive Portfolio website using React"
          imgSrc={portfolio} 
          demoLink={""}
          sourceLink={"https://github.com/kritiydv/My_Portfolio"}
        />
        <ProjectCard 
          title="Gullak-Savings Advisor" 
          date="Sept 2024 - Dec 2024" 
          main="Savings managing web application" 
          desc="Developed using the MERN stack to help users track and optimize their savings."
          imgSrc={savings} 
          sourceLink={"https://github.com/kritiydv/Savings_Advisor"}
        />
        <ProjectCard 
          title="Personal Voice Assistant" 
          date="Dec 2022 - Feb 2023" 
          main="Created voice assistant using Python libraries" 
          desc="Built with Python, this assistant performs tasks based on voice commands."
          imgSrc={voice} 
          sourceLink={"https://github.com/kritiydv/voice_assistant_Python"}
        />
        
      </div>
    </div>
    </section>
   </>
  );
};

export default Projects;
