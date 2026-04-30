import React from 'react'
import logo from "../Images/logo.png";

const Navbar = () => {
  return (
    
    <section className='mt-6.5  absolute z-50 w-full top-0 left-0'>
    <div className='container mx-auto'>

    <div className=' flex items-center justify-between'>


          

    <div>
          <img src={logo} alt="logo"/>
          </div>
       
         

          <div>
          <ul className='flex gap-11.25 '>
              <li className='font-lato font-medium text-black text-[16px] hover:text-[#06C279]'><a href="">Home</a></li>
              <li className='font-lato font-medium text-black text-[16px] hover:text-[#06C279]'><a href="">About</a></li>
              <li className='font-lato font-medium text-black text-[16px] hover:text-[#06C279]'><a href="">Portfolio</a></li>
              <li className='font-lato font-medium text-black text-[16px] hover:text-[#06C279]'><a href="">Services</a></li>
              <li className='font-lato font-medium text-black text-[16px] hover:text-[#06C279]'><a href="">Blog</a></li>
              <li class='font-lato font-medium text-black text-[16px] hover:text-[#06C279]'><a href="">Testimonial</a></li>
          </ul>
          </div>
          
         

          <div className='bg-[#06C279] rounded-[5px]'>
          <a href="">
          <button className='font-lato font-semibold text-[16px] text-[#FFFFFF] py-3.75 px-6.25'
          >Register</button>
          </a>
          </div>

      </div>
      </div>
  </section>
  )
}

export default Navbar
