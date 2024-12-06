import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimateScroll from '../component/Animatetext';

function Firstpage() {
    const imageRef = useRef(null);

// useGSAP(()=>{
//     const el = imageRef.current;
    
//     // Create the rotation animation
//     gsap.to(el, {
//       rotation:30, // Full 360-degree rotation
//       duration: 2, // 2 seconds per rotation
//       ease: "none", // Linear rotation
//       repeat: -1 ,
//       yoyo:true,
      
//     });
// },[])

    return (
        <section className='w-full h-full relative  background-3 overflow-hidden flex  justify-center items-center'>
           
      <div className='relative z-30'>
         <h1 className='  font-semibold  text-4xl w-70 rounded-lg text-center z-10 transform translate-y-14 '>Hi I am </h1>
         <AnimateScroll text={"FATIMA SALEEM"} className={'textgradient  teko text-[220px] w-70 rounded-lg z-40 '}/>
         <h1 className=' font-semibold text-center text-4xl w-70 rounded-lg z-10 transform -translate-y-16  '>Your Frontend Developer</h1>

      </div>
      <div className='absolute w-1/2 h-full bg-pink-950 rounded-full blur-xl z-0 '>
        </div>
      <div className='absolute w-1/3 h-1/2 bg-purple-950 rounded-full blur-xl z-0 '>
        </div>
      
      
        </section>
    )
}

export default Firstpage

  //  <div className="  shadow font-semibold p-3 text-5xl w-96 rounded-lg bg-[#1b0a2e] text-slate-300 border-2 border-stone-500"
  // ><h1 className='textgradient'>Fatima Saleem</h1>
  // </div>
  // <div className=" m-1 ml-20 font-semibold p-4 text-6xl w-70 rounded-lg  text-slate-300 "
  // ><h1 className='textgradient'>Frontend developer</h1>
  // </div> 

  
//            <div  className=' w-full h-full  relative overflow-hidden '>
//            <img  ref={imageRef}
//       src="./bigcircle.png" 
//       alt="Rotating Circle"
//       className='absolute bottom-32 left-1/2 w-full'

//     />
 
// </div>