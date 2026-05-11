import React from 'react'
import women from "../../images/women.png";

const Today = () => {
  return (
    <section className='bg-[#06C279] mb-25 relative h-[352px]'>

    <div className='container mx-auto flex'>

          <div className='w-[70%] justify-center'>
          <div className=' mt-21.75'>
          <h3 className='font-lato font-semibold text-[#FFFFFF] text-[45px] leading-13.75'>Don’t worries, start your free trial today!</h3>
          </div>
          <div className=''>
          <a href="">
          <button className='font-lato font-semibold text-[#FFFFFF] text-[16px] py-3.5 px-6.5 bg-[#2F2F2F] rounded-[5px] mt-9.5'>Get Free Trial</button>
          </a>
          </div>
          </div>
          <div className=''>
          
          <img className='absolute right-[12%] top-[45%] -translate-y-1/2 scale-120' src={women} alt="image"/>

          
          </div>

         </div>
     
      
    </section>
  )
}

export default Today
