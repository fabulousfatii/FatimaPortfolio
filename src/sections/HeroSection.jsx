import { motion } from "framer-motion"

export default function HeroSection() {
    return (
      <div className="min-h-screen background-3 flex items-center justify-center p-4">
        <div  className="relative w-full max-w-6xl aspect-[16/7] rounded-[2rem]  overflow-hidden">
          {/* Background gradient overlay */}
          <div 
            className="absolute inset-0 bg-center opacity-80"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1656066836041-e6d9f6f1eb28?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              mixBlendMode: 'overlay',
            }}
          />
          
          {/* Content */}
          <div  className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">

            <motion.h1 initial={{opacity:0}} animate={{opacity:100}} transition={{duration:1.5, }} className="text-4xl header md:text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            <p className="text-xl md:text-3xl lg:text-4xl text-white/90 font-light">
              Fatima Saleem
            </p>
              Your Frontend
              <br />
              Developer
            </motion.h1>
           
          </div>
          
          {/* Decorative gradient shapes */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" /> */}
        </div>
      </div>
    )
  }
  