import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full   z-50 py-4">
          <div className="container mx-auto flex justify-center items-center">
            <ul className="flex space-x-12 max-sm:space-x-4">
              <NavLink to="/aboutme" className="text-white hover:text-yellow-400 transition-colors">About</NavLink>
              <NavLink to="/projects" className="text-white hover:text-yellow-400 transition-colors">Projects</NavLink>
              <NavLink to="/contact" className="text-white hover:text-yellow-400 transition-colors">Contact</NavLink>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar
