import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio'
import { Analytics } from '@vercel/analytics/react';

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact /> 
        <Footer />
        <Analytics />
    </>
  )
}

export default App