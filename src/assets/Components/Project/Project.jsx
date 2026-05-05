import React from 'react'
import project1 from "../../images/project.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";


const Project = () => {
  return (
    <section className='mt-22.75 mb-13.5'>
      <div className='container mx-auto'>
       

        <div className='flex grid grid-cols-3 justify-center items-center mx-auto gap-5 mt-5 w-full cursor-pointer'>

        <div>
        <img  className="shadow-[0px_4px_25px_5px_rgba(218,246,235,03)]"src={project1} alt="Image"
            />
            
            <div className='text-center mt-5 px-16'>
                <h3 className='font-lato font-semibold text-[#1B1B1B] text-[22px] leanding-7.5 mb-1.75'>Portfolio Landing Page</h3>
            <p className='font-lato font-regular text-[#7B7B7B] text-[16px] leanding-5.5'>Web development is the art of creating engaging and visually appealing websites </p>
        </div>
            
          </div>

          <div>

          <img className="shadow-[0px_4px_25px_5px_rgba(218,246,235,03)]" src={project2} alt="Image"
            />
            
            <div className='text-center  mt-5 px-16'>

              
            <h3 className='font-lato font-semibold text-[#1B1B1B] text-[22px]  text-center  leanding-7.5 mb-1.75'>Plant Landing Page</h3>
            <p className='font-lato font-regular text-[#7B7B7B] text-[16px]  leanding-5.5'>Web development is the art of creating engaging and visually appealing websites </p>
       
     </div>
            
          </div>

          <div>
          <img className="shadow-[0px_4px_25px_5px_rgba(218,246,235,03)]"src=  {project3} alt="Image"
          />
          <div className='text-center mt-5 px-16'>
              
          <h3 className='font-lato font-semibold text-[#1B1B1B] text-[22px] leanding-7.5 mb-1.75'>Real Estate Landing Page</h3>
          <p  className='font-lato font-regular text-[#7B7B7B] text-[16px] leanding-5.5'>Web development is the art of creating engaging and visually appealing websites </p>
          </div>
         </div>
          

         </div>
        
         <div className=' flex  justify-center mt-8'>
         <h3 href=""><button className='font-lato font-semibold text-[16px] px-6 py-3 bg-[#06C279] text-white rounded-[5px]'>View All Projects</button></h3>
         </div>

          </div>
      
    </section>
  )
}

export default Project
