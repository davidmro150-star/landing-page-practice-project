import React from 'react'
import logo from "../../Images/logo.png";
import icon2 from "../../Images/fb.png";
import icon3 from "../../Images/twi.png";
import icon4 from "../../Images/in.png";
import icon5 from "../../Images/be.png";


const Footer = () => {
  return (
  <section>
        <div className='container mx-auto w-full'>
        <div className='flex flex-cols-4 gap-49'>

         <div className='mb-21'>
         <img className='mb-6.5' src={logo} alt="icon"/>
        
         <h3 className='font-lato font-regular text-[#7B7B7B] text-[14px] leading-5.5 mb-1'>mukimsdesign@gmail.com</h3>
         <h4 className='font-lato font-regular text-[#7B7B7B] text-[14px] leading-5.5 mb-5'>+88 01767630044</h4>
         
    <div className='flex gap-1.75 w-7 h-7'>
        <img src={icon2} alt="logo" />
        <img src={icon3} alt="logo"/>
        <img src={icon4} alt="logo"/>
        <img src={icon5} alt="logo"/>
            
        </div>
        </div>
          
    <div className='mb-10.5'>
            <h3 className='flex flex-col gap-2 font-lato font-semibold text-[#1B1B1B] text-[20px] leading-7.5 mb-6.5'>Services</h3>

            <div className="flex flex-col font-lato font-semibold text-[#7B7B7B] font-[14px] leading-5.5">
            <a href="" className="block mb-2">Web Design</a>
            <a href="" className="block mb-2">Web Development</a>
            <a href="" className="block mb-2">SEO Marketing</a>
            <a href="" className="block mb-2">UI/UX Analysis</a>
            <a href="" className="block mb-2">Digital Marketing</a>
            </div>
           </div>

      <div className='mb-18.5'>
            <h3 className='flex flex-col gap-2 font-lato font-semibold text-[#1B1B1B] text-[20px] leading-7.5 mb-6.5'>Help</h3>

            <div className="flex flex-col font-lato font-semibold text-[#7B7B7B] font-[14px] leading-5.5 mb-1">
            <a href="" className="block mb-2">Account</a>
            <a href="" className="block mb-2">Support Center</a>
            <a href="" className="block mb-2">Privacy Policy</a>
            <a href="" className="block mb-2">Terms & Conditions</a>
         
            </div>
            </div>

      <div className='mb-16.5'>
            <h3 className='flex flex-col gap-2 font-lato font-semibold text-[#1B1B1B] text-[20px] leading-7.5 mb-7.5'>Contact Us</h3>
            <input
           type="email"
           placeholder="Enter your email"
           className="font-lato font-semibold text-[#BDBDBD] text-[14px] py-3.5 px-4 w-80 rounded-[5px] leading-5.5 mb-3.5 border-[#DDDDDD] border-[2px] outline-none"
            />
            
      <div className=''>
              <a href="">
              <button className='font-lato font-semibold text-[#FFFFFF] text-[16px] py-3.5 px-6.5 rounded-[5px] bg-[#06C279]'>Request & Callback</button>
              </a>
              </div>
              </div>
          
          
        


              </div>

        <div class="w-full  border-[2px] border-[#E0E0E0] my-4"></div>
        <h3 className='font-lato tont-medium text-[#7B7B7B] text-[14px] leading-5.5 mt-3.5 mb-3.5 text-center'>@2023 CoreWave. All copyrights reserved</h3>
        </div>
    </section>
  )
}

export default Footer
