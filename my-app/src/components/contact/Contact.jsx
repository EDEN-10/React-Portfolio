import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__option'>
          <article className='contact__option'>
          <HiOutlineMailOpen className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yigll002@umn.edu</h5>
            <a href="mailto:yigll002@umn.edu">Send a message</a>
          </article>
          <article className='contact__option'>
          <BsFillTelephoneInboundFill className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>507-202-9495</h5>
            <a href="tel:+5072029495">Call</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name'  required />
          <input type="text" name='email' placeholder='Your Full Name'  required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact