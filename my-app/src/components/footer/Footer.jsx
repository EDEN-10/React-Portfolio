import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#lolo" className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com">Linkedin</a>
      </div>
    </footer>
  )
}

export default Footer