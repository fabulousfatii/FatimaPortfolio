import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Contact from './sections/Contact.jsx'
import Aboutpage from './pages/Aboutpage.jsx'
import Projectspage from './pages/Projectspage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="Aboutme" element={<Aboutpage/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="projects" element={<Projectspage/>}/>
      
  </Routes>
</BrowserRouter>
)
