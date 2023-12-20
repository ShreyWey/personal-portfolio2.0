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
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>Shreyansh.chhalotra@gmail.com</h5>
            <a href="mailto:shreyansh.chhalotra@gmail.com" target="_blank">Email me</a>
          </article>
          <article className="contact__option">
            <FaLinkedin />
            <h4>LinkedIn</h4>
            <h5>Shreyansh Chhalotra</h5>
            <a href="/" target="_blank">Connect with me</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Insta</h4>
            <h5>Shrey_2_good</h5>
            <a href="mailto:shreyansh.chhalotra@gmail.com" target="_blank">Follow me</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact