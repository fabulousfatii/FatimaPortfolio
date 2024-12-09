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
  
  
               <Projectcard
               title={'E-commerce website'}
               description={"A basic e-commerce responsive website focusing on functionality"}
               image={"https://img.freepik.com/premium-photo/online-shop-dark-blue-with-shopping-element-3d-illustration_925613-52327.jpg"}/>
  
              <Projectcard
               title={'Employee Management'}
               description={" Allowing admin to give task to employess , have admin and employee dashboard"}
               image={"https://images.unsplash.com/photo-1530374260450-4bd19102f63d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
  
            </div>
  
          </div>
          <div className="flex justify-center mt-12 hover:bg-yellow-500">

          </div>
        </div>
        
      </section>
    )
}

export default Projectspage
