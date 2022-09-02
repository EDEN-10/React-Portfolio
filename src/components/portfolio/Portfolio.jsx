import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/scheduler.png'
import IMG2 from '../../assets/P1.png'
import IMG3 from '../../assets/weather.png'
import IMG4 from '../../assets/note.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://eden-10.github.io/Work-Scheduler/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://derjbass.github.io/Project-1/" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn' traget= '_blank'>Github</a>
              <a href="https://github.com/EDEN-10/Weather-Dashboard" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className='portfolio__item-cta'>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://notetaker-ey.herokuapp.com/notes" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
