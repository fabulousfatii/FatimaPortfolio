import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import HoverStagger from '../component/HoverStagger'

function Extrasection() {
    const container = useRef()
    const {scrollYProgress} = useScroll(
        {
          target: container,
          offset: ['start end', 'end start']
        }
      )
      
      const x = useTransform(scrollYProgress, [0, 1], [0, -400])
    
    return (
        <section ref={container} className='w-full realtive z-0 max-md:hidden  background-3 p-20 my-20 overflow-hidden flex flex-col justify-start items-start'>
        
      <HoverStagger text={"ENSURING"} />
      <HoverStagger text={"CLIENTS"} />
      <HoverStagger text={"PRIORITY"} />

      <HoverStagger text={"RESPONSIVENESS"} />
       
      </section>
    )
}

export default Extrasection
