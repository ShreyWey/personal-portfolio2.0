import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaMedal} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {GiTexas} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>More About Me</h2>
    
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='about__me-image' src={ME} alt="another pic of me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaMedal className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ years of coding</small>
            </article>

            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Sophmore at TAMU</small>
            </article>

            <article className='about__card'>
              <GiTexas className='about__icon'/>
              <h5>Living in</h5>
              <small>Dallas Texas</small>
            </article>
          </div>

          <p>
          
          I am a versatile computer engineer proficient in delivering both software and hardware solutions. My portfolio includes the creation of various software applications, including the one you are currently utilizing. Beyond coding, I am a member of SAE Formula E team, where we design and compete with electric racing cars on an international level. This involvement has granted me valuable automotive experience, particularly in the realm of electronics and data acquisition. I am also now capable of using industry-standard software like KiKad, Altium, RapidHarness, and Race Studio. I also hold certifications in R and Python from the High-Performance Research Computing program at Texas A&M University. This certification has not only expanded my expertise but also provided me with access to and experience in utilizing HPRC clusters.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
