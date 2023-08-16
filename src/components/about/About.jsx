import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
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
              <FaAward className='about__icon'/>
              <h5>Expirence</h5>
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
          I'm baby williamsburg photo booth taxidermy banh mi locavore cardigan flexitarian bespoke poutine chicharrones 90's cornhole cray. Flexitarian tbh kickstarter stumptown succulents, readymade neutra solarpunk four loko hammock chillwave. Vexillologist organic messenger bag, venmo raclette ethical twee polaroid sustainable thundercats 8-bit. Cliche fit lomo poutine portland iceland affogato shaman hashtag cronut semiotics neutral milk hotel. Mukbang portland bespoke taiyaki hammock. Vice pickled microdosing blog, af listicle artisan paleo yes plz photo booth yuccie praxis four dollar toast ugh live-edge. Readymade dreamcatcher normcore cornhole vegan skateboard.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About