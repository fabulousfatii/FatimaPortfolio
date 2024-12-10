import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Meshcomponent from './Meshcomponent'
import Secondmesh from './Secondmesh'
import { Environment, Scroll, ScrollControls } from '@react-three/drei'
import { useScroll, useTransform, motion } from 'framer-motion'
import Layouts from './sections/Layouts'
import About from './sections/About'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { Hero } from './sections/Hero'
import Extrasection from './sections/Extrasection'



function App() {

  const container = useRef()
  const {scrollYProgress} = useScroll(
    {
      target: container,
      offset: ['start end', 'end start']
    }
  )
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -400])
  
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 6000);
  
      return () => clearTimeout(timer);
    }, []);
  const social= useRef()

  return (
   
    
      <div className='w-full h-screen background'>

        
        <Hero/>
        <Layouts/>
        <Navbar/>
      <section>
        <About/>
      
      </section>

        <section className='w-full h-screen  max-sm:w-full background-3 p-10 max-sm:p-0 overflow-hidden relative'>
          {isLoading? <div className=' w-1/2 h-[90%] border absolute left-11 top-9 text-center flex justify-center items-center rounded-2xl max-md:hidden'><h1 className='text-4xl font-bold '>loading..</h1></div> : <div className='w-1/2 h-[90%] border absolute left-11 top-9 rounded-2xl max-md:hidden'></div>}


        <div className='text-white max-sm:absolute max-sm:top-10  text-5xl 2xl:text-6xl font-bold justify-center items-center flex '>
         
          <h1 className='header max-sm:top-32 max-sm:transform-none  text-center max-sm:contents absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-40'>Here's my CV</h1>
          <div className='shadow2 max-sm:top-24 max-sm:left-10 max-sm:w-60 absolute top-1/2 left-3/4 max-sm:transform-none transform -translate-x-1/2 -translate-y-1/2 z-40 font-semibold p-11 text-5xl w-96 rounded-lg bg-[#1b0a2e] text-slate-300'></div>
          <div className=' absolute max-sm:top-24  max-sm:left-10 max-sm:transform-none top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-40 font-semibold 
          p-3 text-5xl 2xl:text-5xl max-sm:text-4xl  w-96 max-sm:w-60 rounded-lg bg-[#1b0a2e] text-center border-2 border-stone-500 hover:scale-105 max-md:hover:scale-100  '>
          <a href='./FatimaSaleemResume.pdf' download className='textgradient  text-center hover:scale-105 ' >Dowload CV</a>
          </div>
        </div>
          <Canvas camera={{fov: 15, position: [0, 0, -11]}}>
          <ambientLight intensity={0.5} />
          <Meshcomponent/>
        </Canvas>
      
        </section>

        <Projects/>
        
        <section ref={social} className='social w-full h-screen background-3  p-10 max-md:p-3 relative flex justify-end'>

          <Canvas camera={{fov: 12, position: [-16, -8, 180]}}>
            <Secondmesh ref={social}/>
            <Environment preset="sunset"/>
          </Canvas>
          
           <div className='absolute 2xl:bottom-20  right-11 max-md:right-0 max-md:top-3 max-md:ml-4 max-md:bottom-80 bottom-16 flex max-md:flex-row max-sm:flex-col justify-end max-md:justify-start items-start p-8 max-sm:p-0 max-sm:mr-0 mr-8 flex-col gap-9 max-md:gap-4'>
           <a  href="https://www.linkedin.com/in/fatima-saleem-7b4667222/" target="_blank" rel="noopener noreferrer" className="h-20 max-sm:h-14 bg-blue-700  pr-4 flex transform -translate-x-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC" alt="LinkedIn" className="h-20 max-sm:h-14 w-70 object-cover"/>
            <h1 className='text-center text-xl 2xl:text-2xl mt-6 ml-3'> Linkedin</h1>
            </a>
            <a href="https://github.com/fabulousfatii" target="_blank" rel="noopener noreferrer" className=" pr-4 flex h-20 bg-white transform -translate-x-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="h-20 max-sm:h-14  w-70 object-cover"/>
              <h1 className='text-center 2xl:text-2xl text-black text-xl mt-6 ml-3'>Github </h1>
            </a>
            <a href="https://fatimasaleem778899@gmail.com" target="_blank" rel="noopener noreferrer" className=" pr-4 flex h-20 bg-rose-900 max-sm:h-14 transform -translate-x-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700">
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--new-google-logos-pack-icons-2476484.png?f=webp" alt="GitHub" className="h-20 max-sm:h-14 w-70 object-cover"/>
              <h1 className='text-center text-xl 2xl:text-2xl mt-6 ml-3'> Gmail</h1>
            </a>
           </div>
         
        </section>

       <Extrasection/>
       <Contact/>
      
      
      </div>
  )
}

export default App
