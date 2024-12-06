import React from 'react'

function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full   z-50 py-4">
          <div className="container mx-auto flex justify-center items-center">
            <ul className="flex space-x-12 max-sm:space-x-4">
              <li><a href="#home" className="text-white hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-white hover:text-yellow-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-white hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar
