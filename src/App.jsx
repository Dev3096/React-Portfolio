import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'
import PortFolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services/>
        <PortFolio />
        <Testimonials/>
        <Contacts />
        <Footer />
        
        

    </>
  )
}

export default App