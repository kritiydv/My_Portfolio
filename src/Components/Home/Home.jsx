import React from 'react'
import avatarImg from '../../assets/7358602-removebg-preview.png'
import TextChanger from '../../TextChanger'

const Home = () => {
  return (
    <>
    <section id="Home">
    <div  className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tigther'> <TextChanger/></h1>
        <p className='text-sm md:text-2xl tracking tracking-tight'>Hardworking motivated and enthusiastic individual with a strong work ethic, eager to learn new things and grow every day. Equipped with a good foundation in HTML CSS Javascript C/C++ Python and a passion for continuous improvement and innovation. </p>
        <button onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact</button>
        </div>
        <div><img className='' src={avatarImg} alt="" /></div>
    
    </div>
    </section>
   </>
  )
}

export default Home