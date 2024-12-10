import { Stars } from "@react-three/drei";
import { Shadow } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Animatetext from "../component/Animatetext";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% on 50% 0% ,  #241142 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      
      className="relative grid min-h-screen place-content-center overflow-hidden background-3 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          portfolio!
        </span>
        <p className="mt-6 max-w-xl text-xl max-xl:text-2xl max-sm:text-sm text-center leading-relaxed md:text-lg md:leading-relaxed">
          Hi , Welcome. I am 
        </p>
        
        <Animatetext text={"Fatima Saleem"} className={'max-w-3xl  bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-8xl max-xl: font-medium leading-tight text-transparent max-sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight '}/>
        <p className="mb-1 max-w-xl font-bold text-center text-xl leading-relaxed md:text-lg md:leading-relaxed">
       
        </p>
        <p className="mb-6 max-w-xl text-center text-xl max-2xl:text-2xl leading-relaxed max-sm:text-sm md:text-lg md:leading-relaxed">
         your frontend developer, here to help you build your next big thing 

        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Explore more
         
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
    
        </Canvas>
      </div>
    </motion.section>
  );
};