import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Lets Talk</h5>
      <h2>My Contacts</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Shreyansh.chhalotra@gmail.com</h5>
            <a href="mailto:shreyansh.chhalotra@gmail.com" target="_blank">Email me</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Shreyansh Chhalotra</h5>
            <a href="https://www.linkedin.com/in/shrey2004/" target="_blank">Connect with me</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Insta</h4>
            <h5>Shrey_2_good</h5>
            <a href="https://www.instagram.com/shrey_2_good" target="_blank">Follow me</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' reuired></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact