import React from 'react'
import { BackgroundBeams } from '../ui/BackgroundBeams'
import {NavLink} from 'react-router-dom'
import Projectcard from '../component/Projectcard'

function Projects() {
  return (
    <section className='w-full background-3 p-10 py-20  relative'>
      
      <div className="container mx-auto flex flex-col justify-center">
        <h1 className="text-white text-5xl 2xl:text-7xl font-bold text-center m-10">Projects</h1>
        
         
       

        <div className=" px-20 w-full flex justify-center gap-11">
        

          <div className='  bg-opacity-50 rounded-lg flex max-sm:flex-col justify-center items-center p-4 gap-11 flex-wrap '>

            <Projectcard
             title={'Blog Website'}
             description={"A responsive blog website built with react js. Firbase for storage"}
             link={"https://blog-app-lyart-two.vercel.app/"}
             //image={"https://images.unsplash.com/photo-1619608135352-868e8313e121?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
             image={"/blog.jpg"}
             />

             <Projectcard
             title={'E-commerce website'}
             description={"A basic e-commerce responsive website focusing on functionality"}
             link={"https://ecommerce-app-five-gilt.vercel.app/"}
            image={"https://img.freepik.com/premium-photo/online-shop-dark-blue-with-shopping-element-3d-illustration_925613-52327.jpg"}
             />
           
          

          </div>
          
        </div>
  <div className='w-full flex justify-center my-10'>
           <a className=' w-32 p-2 text-center max-md:w-72 max-sm:w-60 hover:bg-black  z-40 rounded-xl flex flex-col justify-start   border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
           <NavLink to="/projects" className=" m-auto">
            View More
          </NavLink>
            </a>
            </div>
            
        
      </div>
      
      <BackgroundBeams>
      <div className='absolute z-40'></div>
      </BackgroundBeams>
    </section>
  )
}

export default Projects

//bg-[#170427] bg-opacity-40  backdrop-filter backdrop-blur-xl
