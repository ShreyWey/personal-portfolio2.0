import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

//for serviceability

const data = [
    {
        id: 1,
        image: img1,
        title: 'first portfolio website',
        github: 'https://github.com/ShreyWey/PersonalPage'
    },
    {
        id: 2,
        image: img2,
        title: 'RevTube',
        github: 'https://github.com/aggie-coding-club/RevTube/tree/main'
    },
    {
        id: 3,
        image: img3,
        title: 'AeroCheck',
        github: 'https://github.com/Immortal000/aero.check/tree/main'
    },
    {
        id: 4,
        image: img4,
        title: 'project title',
        github: '/'
    },
    {
        id: 5,
        image: img5,
        title: 'project title',
        github: '/'
    },
    {
        id: 6,
        image: img6,
        title: 'project title',
        github: '/'
    }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
        {
            data.map(({id, image, title, github}) => {
                return(
                    <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                </div>
            </article>
                )
            })
        }
        </div>
    </section>
  )
} 

export default Portfolio