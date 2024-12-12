import React from 'react'
import Projectcard from '../component/Projectcard'
import { NavLink } from 'react-router-dom'

function Projectspage() {
    return (
        <section className='w-full  background-3 p-10 py-20  relative'>
          
         <NavLink to={"/"} className='flex items-center  '>
         <svg className='cursor-pointer hover:scale-105' width="59px" height="69px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#fffafa" stroke="#fffafa"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f7f7f7" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#f7f7f7" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
         <span className='text-xl font-semibold cursor-pointer '>Back</span>
         </NavLink>
        
        <div className="container mx-auto flex flex-col justify-center">
          <h1 className="text-white text-5xl font-bold text-center m-10">Projects</h1>
  
          <div className=" px-20 w-full flex justify-center gap-11">
  
            <div className='  bg-opacity-50 rounded-lg flex max-sm:flex-col justify-center items-center p-4 gap-11 flex-wrap '>
              
              <Projectcard
               title={'Blog Website'}
               description={"A responsive blog website built with react js. Firbase for storage"}
               link={"https://blog-app-lyart-two.vercel.app/"}
              // image={"https://images.unsplash.com/photo-1619608135352-868e8313e121?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              image={"/blog.jpg"}/>
  
  
               <Projectcard
               title={'E-commerce website'}
               description={"A basic e-commerce responsive website focusing on functionality"}
               link={"https://ecommerce-app-five-gilt.vercel.app/"}
               image={"https://img.freepik.com/premium-photo/online-shop-dark-blue-with-shopping-element-3d-illustration_925613-52327.jpg"}/>
  
              
               <a className=' w-96 2xl:w-[420px] max-md:w-72  max-sm:w-60  h-80 2xl:h-96 z-40 rounded-xl flex flex-col justify-start p-6  border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
            <img src="https://images.unsplash.com/photo-1530374260450-4bd19102f63d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={`shadow3 top-0 left-0 absolute w-96 h-80 -z-2 object-cover bg-opacity-40  backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center p-  border hover:blur-sm `} ></img>
             <h1 className='text-sm z-40 text-yellow-500 mb-2 '>in finalization</h1>
             <h1 className='text-3xl z-40 font-bold '>Employee Management</h1>
             <p className='text-xl z-40 text-gray-400 '>Allowing admin to give task to employess , have admin and employee dashboard </p>
            </a>
  
            </div>
  
          </div>
          <div className="flex justify-center mt-12 hover:bg-yellow-500">

          </div>
        </div>
        
      </section>
    )
}

export default Projectspage
