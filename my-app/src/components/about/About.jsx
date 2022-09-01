import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {SiRelianceindustrieslimited} from 'react-icons/si'
import {GrProjects} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
      <h1>About ME</h1>
      <h5>Get to know </h5>
      <div className='container about__container'>
      <div className='about__me-image'>
        <img src={ME} alt="AboutImage"/>
      
      </div>
      <div className="about__conent">
        <div className="about__cards">
          <article className= 'about__card'>
            <BsAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className= 'about__card'>
            <SiRelianceindustrieslimited className='about__icon'/>
            <h5>Interets</h5>
            <small>React, Python, Frontend, C#, MySQL, Node</small>
          </article>
          <article className= 'about__card'>
            <GrProjects className='about__icon'/>
            <h5>Porjects</h5>
            <small>View Selected Projects in the <section></section></small>
          </article>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus pariatur esse neque nulla? Quibusdam quod consequuntur quasi autem? Nihil, quaerat! A dolore soluta minus quae architecto sed beatae mollitia aut!
        </p>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>

      </div>
    </div>

    </section>
    
    
  )
}

export default About