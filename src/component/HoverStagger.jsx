import React, { useEffect, useState } from 'react'
import {  motion } from 'framer-motion'

function HoverStagger({text,className}) {
    const [splitTextt,setsplitTextt]= useState([])
    useEffect(()=>{
        const splitText=text.split('')
        
        
        setsplitTextt(splitText)
    },[text])
   
    
   const islarge = window.innerWidth >1536
    
    return (
       
      <motion.div whileHover="hovered" className=' h-full relative overflow-hidden '>
      
    { splitTextt.map((char,index)=>{
            return(
                <motion.span key={index} className='text-8xl  max-md:text-4xl font-bold inline-block ' variants={{initial:{y:0},hovered:{y:"-200%" }}} 
                transition={{ 
                    delay: index * 0.025  ,
                    duration: 0.25,
                    ease: "easeInOut",}} >{char} </motion.span>
            )
        })}    
   <div className='absolute top-20 z-40'>
   { splitTextt.map((char,index)=>{
           return(
            <motion.span key={index} className='text-8xl  max-md:text-4xl font-bold inline-block ' variants={{initial:{y:"100%"},hovered:{y:"-90%" }}} 
            transition={{ delay: index * 0.025,
                duration: 0.25,
                ease: "easeInOut",
             }} > {char} </motion.span>
           )
        })}    
   </div>
        
        
    </motion.div>
    )
}

export default HoverStagger


//inline-block property is very important here
// variants={{initial:{y:0},hovered:{y:"-200%" }
// variants={{initial:{y:"100%"},hovered:{y:"-90%" }