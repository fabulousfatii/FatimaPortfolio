import React from 'react'
import Projectcard from '../component/Projectcard'

function Projectspage() {
    return (
        <section className='w-full max-md:hidden background-3 p-10 py-20  relative'>
      
        <div className="container mx-auto flex flex-col justify-center">
          <h1 className="text-white text-5xl font-bold text-center m-10">Projects</h1>
  
          <div className=" px-20 w-full flex justify-center gap-11">
  
            <div className='  bg-opacity-50 rounded-lg flex max-sm:flex-col justify-center items-center p-4 gap-11 flex-wrap '>
              
              <Projectcard
               title={'Blog Website'}
               description={"A responsive blog website built with react js. Firbase for storage"}
               image={"https://images.unsplash.com/photo-1619608135352-868e8313e121?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>

{/* <div className=' w-96 max-md:w-72  max-sm:w-60  h-80 z-40 rounded-xl flex flex-col justify-start p-6  border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
            <div className={`shadow3 top-0 left-0 absolute w-96 h-80 -z-2 bg-[url("https://images.unsplash.com/photo-1619608135352-868e8313e121?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-opacity-40  backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center p-  border hover:blur-sm `} ></div>
             <h1 className='text-sm z-40 text-yellow-500 mb-2 '>latest</h1>
             <h1 className='text-3xl z-40 font-bold '>Blog Website</h1>
             <p className='text-xl z-40 text-gray-400 '> A responsive blog website built with react js. Firbase for storage</p>
            </div> */}
  
  
               <Projectcard
               title={'E-commerce website'}
               description={"A basic e-commerce responsive website focusing on functionality"}
               image={"https://img.freepik.com/premium-photo/online-shop-dark-blue-with-shopping-element-3d-illustration_925613-52327.jpg"}/>
  
  {/* <div className=' w-96 max-md:w-72  max-sm:w-60  h-80 z-40 rounded-xl flex flex-col justify-start p-6  border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
            <div className={`shadow3 top-0 left-0 absolute w-96 h-80 -z-2 bg-[url("https://img.freepik.com/premium-photo/online-shop-dark-blue-with-shopping-element-3d-illustration_925613-52327.jpg")] bg-cover bg-opacity-40  backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center p-  border hover:blur-sm `} ></div>
             <h1 className='text-sm z-40 text-yellow-500 mb-2 '>latest</h1>
             <h1 className='text-3xl z-40 font-bold '>E-commerce website</h1>
             <p className='text-xl z-40 text-gray-400 '>A basic e-commerce responsive website focusing on functionality</p>
            </div> */}
              
               <div className=' w-96 max-md:w-72  max-sm:w-60  h-80 z-40 rounded-xl flex flex-col justify-start p-6  border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
            <div className={`shadow3 top-0 left-0 absolute w-96 h-80 -z-2 bg-[url("https://images.unsplash.com/photo-1530374260450-4bd19102f63d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-opacity-40  backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center p-  border hover:blur-sm `} ></div>
             <h1 className='text-sm z-40 text-yellow-500 mb-2 '>latest</h1>
             <h1 className='text-3xl z-40 font-bold '>Employee Management</h1>
             <p className='text-xl z-40 text-gray-400 '>Allowing admin to give task to employess , have admin and employee dashboard </p>
            </div>
  
            </div>
  
          </div>
          <div className="flex justify-center mt-12 hover:bg-yellow-500">

          </div>
        </div>
        
      </section>
    )
}

export default Projectspage
