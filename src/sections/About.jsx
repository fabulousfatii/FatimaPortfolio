import React from 'react'
import {motion} from "framer-motion"
import AnimateScroll from '../component/AnimateScroll'
function About() {
    return (
        <div className='w-full background-3 '>
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
             <AnimateScroll  text={"About me"} className={` font-semibold text-6xl w-70 rounded-lg textgradient2 text-slate-300`}/>
              <div className="space-y-6  text-gray-300">
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 2,delay:1}}  >
                  Hi! I'm Fatima, a passionate Frontend Developer with a keen eye for creating beautiful and functional web experiences. I specialize in building responsive, user-friendly websites using modern technologies like React, Three.js, and Tailwind CSS.
                </motion.p>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 2,delay:1}}>
                  With a strong foundation in web development fundamentals and a constant drive to learn new technologies, I strive to create innovative solutions that combine aesthetics with functionality. My passion for coding and problem-solving drives me to continuously improve and stay up-to-date with the latest trends in web development. I believe in the power of collaboration and am always eager to work with like-minded individuals to create exceptional digital experiences.
                </motion.p>
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-orange-400 mb-4">Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-opacity-40 bg-purple-800 p-3 rounded">React.js</div>
                    <div className="bg-opacity-40 bg-purple-800  p-3 rounded">Three.js</div>
                    <div className="bg-opacity-40 bg-purple-800  p-3 rounded">Tailwind CSS</div>
                    <div className="bg-opacity-40 bg-purple-800  p-3 rounded">JavaScript</div>
                    <div className="bg-opacity-40 bg-purple-800  p-3 rounded">HTML5</div>
                    <div className="bg-opacity-40 bg-purple-800  p-3 rounded">CSS3</div>
                  </div>
                  <button className="mt-6 px-6 py-2 bg-transparent border border-yellow-400 text-white rounded-md hover:bg-yellow-500 transition-colors">
                  <NavLink to="/aboutme" className="">
            See More
          </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default About
