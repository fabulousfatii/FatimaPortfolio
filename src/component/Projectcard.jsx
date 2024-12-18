import React from 'react'
import { motion } from 'framer-motion'

function Projectcard({title,description,image,link}) {
    return (
<motion.a initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:1.5, }}  href={link} className='shadow3  w-[30rem] 2xl:w-[500px] max-md:w-72 max-sm:w-60  h-80 2xl:h-96 z-40 rounded-xl flex flex-col justify-start p-6  border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
            <img src={image} className={`shadow top-0 left-0 absolute w-[30rem] 2xl:w-[500px] h-80 2xl:h-96 -z-2 object-cover   backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center  border hover:blur-sm `} ></img>
            {/* <div className={`shadow3 top-0 left-0 absolute w-96 2xl:w-[420px] h-80 2xl:h-96 -z-2 bg-[url("${image}")] bg-cover bg-opacity-40  backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center p-  border hover:blur-sm `} ></div> */}
             <h1 className='text-sm 2xl:text-lg z-40 text-yellow-500 mb-2 '>latest</h1>
             <h1 className='text-3xl 2xl:text-4xl z-40 font-bold '>{title}</h1>
             <p className='text-xl 2xl:text-2xl z-40 text-gray-400 '> {description}</p>
            </motion.a>
    )
}

export default Projectcard
