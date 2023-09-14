import React from "react"
import './experience.css'
import {FaAward} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='expirence'>
      <h5>What Skills I have</h5>
      <h2>My Expirence</h2>
      <div className="container experience__container">
        <div className="expirence__soft">
          <h3>Software</h3>
          <div className="expirence__content">
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>R</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>Cyber Security for Linux and Windows Systems</h4>
                <small className='text-light'>Expirenced</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Expirenced</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>Svelte</h4>
                <small className='text-light'>Expirenced</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>Java / Type Script</h4>
                <small className='text-light'>Expirenced</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Expirenced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="expirence__hard">
          <h3>Hardware</h3>
          <div className="expirence__content">
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>Servers</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>Soldering</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>PCB Design with Altium</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>Aurduino</h4>
                <small className='text-light'>Expirenced</small>
              </div>
            </article>
            <article className="expirence__details">
              <FaAward className='experience__details-icon'/>
              <div>
                <h4>Raspberry Pi</h4>
                <small className='text-light'>Novice</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience