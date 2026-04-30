import React from 'react'
import banner from "../Images/banner.png";
import icon from "../Images/icon.svg";

const Banner = () => {
  return (
    <section className='pt-28 bg-[#EEFFF9] relative bg-no-repeat bg-cover bg-center w-full h-full'>
    <div className='container mx-auto'>

          <div className='flex'>
          <div className='w-1/2 mt-28'>
            
          <h3 className='font-lato font-light text-[60px] text-[#1B1B1B] leading-18'>Empower Your Team</h3>
          <h2  className='font-lato font-bold text-[60px] text-[#1B1B1B] leading-18 mb-9.25'>With CoreWave's</h2>
          <p className='font-lato font-normal text-[#717171] text-[20px] leading-7.5 mb-12.75'>Boost Productivity and Wellness in Your Organization with
          CoreWave's Advanced Tools and Techniques</p>
            
          <div className='flex gap-5 items-center'>
          <a href="">
          <button className='font-lato font-semibold text-[#ffff] bg-[#06C279]   py-3.75 px-6.25 rounded-[5px]'>Explore More</button>
          </a>
          <a href="">
               
          <button className='flex items-center border-[2px] border-[#06C279]  gap-2 font-lato font-semibold text-black   py-3 px-6.25 rounded-[5px]'>
                  
          <span className='bg-[#DAF6EB] p-2 rounded-full flex items-center justify-center'>

          <img className='w-3 h-3'  src={icon}
          alt="icon" />

          </span>
                  
          Watch Video
                
          </button>
          </a>

          </div>
          

          </div>

      <div className='w-1/2 flex justify-center'>
          <img src={banner} alt="image"/>
          </div>
          </div>
          </div>

      
    </section>
  )
}

export default Banner
