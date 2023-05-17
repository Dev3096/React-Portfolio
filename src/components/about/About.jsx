import React from 'react'
import './About.css'
import aboutMe from '../../assets/aboutMe.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id = 'about'>
      <h5> Get to Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="About Image"/>
          </div>
        </div>
        
        <div className="about__content">
          <div className = "about__cards">
            <article className="about__card">
              <FaAward className = "about__icon"/>
              <h5> Experience</h5>
              <small> 3+ years</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className = "about__icon"/>
              <h5> Projects</h5>
              <small> 10+ Completed</small>
            </article>

            </div> 

            <p>
            I am Devansh Goel, a Software Quality Assurance Engineer with 3+ years of experience. I am passionate about delivering high-quality software and have a keen eye for detail. I enjoy collaborating with development teams and staying up-to-date with industry best practices. Let's create exceptional software together!
            </p>

            <a href="#contact" className = 'btn btn-primary'> Let's Talk</a> 
        </div>
      </div>

    </section>
  )
}

export default About