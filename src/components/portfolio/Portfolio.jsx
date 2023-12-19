import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
        <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={img1} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github" className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={img2} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github" className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={img3} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github" className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={img4} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github" className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={img5} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github" className='btn' target='_blank'>Github</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={img6} alt="" />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                    <a href="https://github" className='btn' target='_blank'>Github</a>
                </div>
            </article>
        </div>
    </section>
  )
} 

export default Portfolio