import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pic-of-me.JPG'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello! It's Eden </h5>
        <h1>Your FullStack Developer</h1>
        <h5 className='text-light'>Your FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div> 

    </header>
  )
}

export default Header