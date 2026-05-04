import React, { useState } from 'react'

const Latest = () => {

  const [active, setActive] = useState("Mobile App")
  
    const menus = [
    "Mobile App",
    "Web Development",
    "UI/UX Design",
    "Graphic Design",
    "Motion Graphic"
  ]

  return (
  <section className='mt-22.5 mb-13.5'>
         <div className='container mx-auto'>
         
          <div className='text-center'>
          <h2 className='font-lato font-semibold text-[#1B1B1B] text-[45px] leading-13.5 mb-8'>Our Latest Project</h2>
         
          <div className="w-fit mx-auto">
          <div className='flex justify-center gap-18.5 font-lato font-medium text-[#7B7B7B] text-[16px]  mb-3'>
             
          {menus.map((item) => (
            
                
            <div
              
          key={item}
              onClick={() => setActive(item)}
              className='cursor-pointer relative '
              >
          <h4 className='hover:text-[#06C279] font-bold transition'>
          {item}
          </h4>

         {active === item && (
         <div className='absolute left-0 -bottom-4 w-full h-[4px] bg-[#06C279]'></div>
         )}
        </div>
        ))}


        </div>
        <div className='border-[#CECECE] border-[2px]'></div>
        </div>

          
             
          
     
      </div>
      </div>
       
      
    </section>
  )
}

export default Latest
