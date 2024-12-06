import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

function Animatetext({text,className}) {
    const [splitText,setsplitText]= useState([])
    useEffect(()=>{
        const splitText=text.split('')
        
        
        setsplitText(splitText)
    },[text])
    

    
    return (
        <div>
            {splitText.map((char, index) => (
                <motion.span className={className} key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                    {char}
                </motion.span>
            ))}
        </div>
    )
}

export default Animatetext
