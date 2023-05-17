import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id = 'experience'>
      <h5> The Skills I have </h5>
      <h2> My Experience </h2>

      <div className = "container experience__container">
        <div className="experience__Automationtesting">
          <h3> Automation Testing </h3>
          <div className="experience__content">
            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Python </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Java </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Selenium </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Cucumber </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> TestNG </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> RESTFul API </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Jenkins </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Appium </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

          </div>
        </div>

        <div className="experience__Manualtesting">
        <h3> Manual Testing </h3>
          <div className="experience__content">
            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> MySQL </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> React </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> JIRA </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Test Plan </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Regression Testing </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> TestRail </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> PostgreSQL </h4>
              <small classNam="text-light"> Intermediate </small>
            </div>
            </article>

            <article className = "experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4> Agile Methodology </h4>
              <small classNam="text-light"> Experienced </small>
            </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience