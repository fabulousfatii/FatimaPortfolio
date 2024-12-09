import React from 'react'
import Animatetext from '../component/Animatetext'
import { easeIn, motion } from 'framer-motion'

function Layouts() {
    return (
        <section className='w-full h-[110vh] max-sm:hidden  background-3  p-14 pt-24 px-24 overflow-hidden flex flex-col justify-center items-center'>
        <div className='w-full h-full mx-4  rounded-xl bg-[url("/pic.png")] bg-cover bg-start p-16'>
        <motion.h1 initial={{opacity:0}} whileInView={{opacity:100}} transition={{delay:0.3, duration:1 , ease:easeIn}} className='header text-6xl max-md:text-4xl font-bold'>Transforming websites to next level and better user experience</motion.h1>
        </div>
        <div className='w-full h-full mb-2 mt-4  flex'>
         <div className='w-2/3 h-full mr-2 flex flex-col p-8 justify-end items-end rounded-xl bg-[url("/pic2.png")] bg-cover bg-center'>
         <Animatetext text={'Bringing creativity and code together!'} className={'header text-4xl max-md:text-2xl text-end   text- font-bold '}/>
         </div>
         <div className='w-1/3 h-full ml-2  rounded-xl bg-[url("/pic1.png")] bg-cover bg-center'></div>
        </div>
      </section>
    )
}

export default Layouts
