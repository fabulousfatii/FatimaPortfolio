import React from 'react'

function Projectcard({title,description,image,link}) {
    return (
<a href={link} className=' w-96 max-2xl:w-[28rem]max-md:w-72 max-sm:w-60  h-80 z-40 rounded-xl flex flex-col justify-start p-6  border relative overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer '>
            <div className={`shadow3 top-0 left-0 absolute w-96 h-80 -z-2 bg-[url("${image}")] bg-cover bg-opacity-40  backdrop-filter backdrop-blur-xl rounded-xl flex flex-col  items-center p-  border hover:blur-sm `} ></div>
             <h1 className='text-sm z-40 text-yellow-500 mb-2 '>latest</h1>
             <h1 className='text-3xl z-40 font-bold '>{title}</h1>
             <p className='text-xl z-40 text-gray-400 '> {description}</p>
            </a>
    )
}

export default Projectcard
