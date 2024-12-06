import React from 'react'
import { BackgroundBeams } from '../ui/BackgroundBeams'


function Projects() {
  return (
    <section className='w-full  background-3 p-10 py-20  relative'>
      
      <div className="container mx-auto flex flex-col justify-center">
        <h1 className="text-white text-5xl font-bold text-center m-10">Projects</h1>

        <div className=" px-20 w-full flex justify-center gap-11">

          <div className='  bg-opacity-50 rounded-lg flex max-sm:flex-col justify-center items-center p-4 gap-11 flex-wrap'>
            

            <div className=' w-96 max-md:w-72  max-sm:w-60  h-80 z-40 rounded-xl flex flex-col justify-start p-6  border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
            <div className='shadow3 top-0 left-0 absolute w-96 h-80 -z-2 bg-[url("./blog.jpg")] bg-cover bg-opacity-40  backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center p-  border hover:blur-sm' ></div>
             <h1 className='text-sm z-40 text-yellow-500 mb-2 '>latest</h1>
             <h1 className='text-3xl z-40 font-bold hover:scale-105'>Blog Website</h1>
             <p className='text-xl z-40 text-gray-400 '> A responsive blog website built with react js and firbase for storage</p>
            </div>

            <div className='relative w-96 max-md:w-72  max-sm:w-60  h-80 z-40 border rounded-xl flex flex-col justify-start  p-6 overflow-hidden hover:scale-105 cursor-pointer transition-all duration-200 '>
            <div className='shadow3 absolute top-0 left-0 w-96 h-80 bg-[url("https://img.freepik.com/premium-photo/online-shop-dark-blue-with-shopping-element-3d-illustration_925613-52327.jpg")] bg-cover border rounded-xl flex flex-col justify-center items-center p-4 hover:blur-sm'></div>
            <h1 className='text-sm z-40 text-yellow-500 mb-2 '>latest</h1>
            <h1 className='text-3xl z-40 font-bold  hover:scale-105'>E-commerce website</h1>
            <p className='text-xl z-40 text-gray-500 '> A basic e-commerce responsive website focusing on functionality</p>
            </div>

            <div className=' w-96 max-md:w-72 max-sm:w-60 h-80 relative z-40 border rounded-xl flex flex-col justify-start  p-6 overflow-hidden hover:scale-105 cursor-pointer transition-all duration-200 '>
            <div  className='shadow3 w-96 h-80 top-0 left-0 absolute bg-[url("https://w0.peakpx.com/wallpaper/435/732/HD-wallpaper-laptop-numbers-dark.jpg")] bg-cover  border rounded-xl flex flex-col justify-center items-center p-4 hover:blur-sm'></div>
            <h1 className='text-sm z-40 text-yellow-500 mb-2 '>latest</h1>
            <h1 className='text-3xl z-40 font-bold  hover:scale-105'>Employee Management </h1>
            <p className='text-xl z-40 text-gray-500 '> Allowing admin to give task to employess , have admin and employee dashboard </p>
            </div>

          </div>

        </div>
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 font-semibold">
            View More
          </button>
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
