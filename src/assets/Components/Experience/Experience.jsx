import React from 'react'
import experience from "../../images/ex.png";


const Experience = () => {
  return (


    <section className='mt-34.5'>
        <div className='container mx-auto'>
        <div className='flex items-center gap-36.5'>
          
           <div className='w-1/2'>
      
           <h3 className='font-lato font-semibold text-[#1B1B1B] text-[45px] leading-13.5'>Experience the power 
            <span className='block font-lato font-semibold text-[#1B1B1B] text-[45px] leading-13.5 mb-7.5'>of Corewave</span>
            </h3>

            <p className='font-lato font-regular text-[#7B7B7B] text-base leading-6.75 mb-12.5'>Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>

            <div className=''>
            <a href="">
            <button className='font-lato font-semibold bg-[#DAF6EB]  rounded-[5px] text-[#06C279] text-[16px] py-3.5 px-6.5'>Learn More</button>
            </a>
            </div>
            </div>

    <div className='w-1/2 flex '>
           <img src={experience} alt=""/>
           </div>
           </div>

          </div>
      
    </section>
  )
}

export default Experience


