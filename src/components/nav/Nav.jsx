import React from 'react'
import './nav.css'
import {SiHomebridge} from 'react-icons/si'
import {FaUserCircle} from 'react-icons/fa'
import {BiBookAlt} from 'react-icons/bi'
import {FaServicestack} from 'react-icons/fa'
import {MdContactSupport} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <li href="# " onClick={() => setActiveNav('#')} className={activeNav === '# ' ? 'active' : ''}><SiHomebridge/></li>
      <li href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle/></li>
      <li href="#experience" onClick={() => setActiveNav ('#experience')} className={activeNav === '#expericene' ? 'active' : ''}><BiBookAlt/></li>
      <li href="#services" onClick={() => setActiveNav ('#services')} className={activeNav === '#serives' ? 'active' : ''}><FaServicestack/></li>
      <li href="#contact" onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactSupport/></li>
      
    </nav>

  )
}

export default Nav