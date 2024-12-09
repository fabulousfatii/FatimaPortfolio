import React from 'react'
import AnimateScroll from '../component/AnimateScroll'
import { motion } from 'framer-motion'

function Aboutpage() {
    return (
        <main>
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
                    <div className="bg-opacity-40 bg-purple-800  p-3 rounded">HTML</div>
                    <div className="bg-opacity-40 bg-purple-800  p-3 rounded">CSS</div>
                  </div>
                  
                </div>
                {/* education section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-orange-400 mb-4">Education</h3>
                  <div className="space-y-4">
                    <motion.div 
                      initial={{opacity:0, x:-50}} 
                      whileInView={{opacity:1, x:0}} 
                      transition={{duration: 0.5}}
                      className="bg-opacity-40 bg-purple-800 p-4 rounded-lg"
                    >
                      <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
                      <p className="text-gray-300">Virtual University of Pakistan , lahore, Pakistan</p>
                    </motion.div>
                  </div>
                </div>

                {/* certification section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-orange-400 mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div 
                      initial={{opacity:0, x:-50}} 
                      whileInView={{opacity:1, x:0}} 
                      transition={{duration: 0.5, delay: 0.2}}
                      className="bg-opacity-40 bg-purple-800 p-4 rounded-lg"
                    >
                      <h4 className="text-xl font-semibold text-white">React Developer Certification</h4>
                      <p className="text-gray-300">Online Learning Platform, 2023</p>
                    </motion.div>
                    <motion.div 
                      initial={{opacity:0, x:-50}} 
                      whileInView={{opacity:1, x:0}} 
                      transition={{duration: 0.5, delay: 0.4}}
                      className="bg-opacity-40 bg-purple-800 p-4 rounded-lg"
                    >
                      <h4 className="text-xl font-semibold text-white">Frontend Web Development Bootcamp</h4>
                      <p className="text-gray-300">Tech Education Institute, 2022</p>
                    </motion.div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

        </main>
    )
}

export default Aboutpage
