import React from 'react'
import './portfolio.css'
import seleniumAutomation from '../../assets/seleniumAutomation.jpg'
import restAPI from '../../assets/restAPI.png'
import API from '../../assets/API.webp'
import manualTesting from '../../assets/manualTesting.jpg'
import timeseries from '../../assets/timeSeries.jpeg'
import machineLearning from '../../assets/machineLearning.jpg'
const data = [
  {
    id: 1,
    image: seleniumAutomation,
    title: 'Web Automation using Selenium',
    github: 'https://github.com/Dev3096/Ecommerce-Web-Automation-Framework',
    demo: 'https://youtube.com'
  }, 
  {
    id: 2,
    image: restAPI,
    title: 'REST API Automation',
    github: 'https://github.com/Dev3096/REST-API-Framework',
    demo: 'https://youtube.com'
  }, 
  {
    id: 3,
    image: manualTesting,
    title: 'Manual Testing Project',
    github: 'https://github.com/Dev3096/CS-589-Software-Testing-Project',
    demo: 'https://youtube.com'
  },
  {
    id: 4,
    image: API,
    title: 'Github API Analysis',
    github: 'https://github.com/Dev3096/GitHub-API-Analysis',
    demo: 'https://youtube.com'
  },
  {
    id: 5,
    image: timeseries,
    title: 'TimeSeries Forcasting using API',
    github: 'https://github.com/Dev3096/TimeSeries-Forcasting',
    demo: 'https://youtube.com'
  },
  {
    id: 6,
    image: machineLearning,
    title: 'Location Prediction using Annotations',
    github: 'https://github.com/Dev3096/Machine-Learning-Mouse-Annotations-Project',
    demo: 'https://youtube.com'
  }

]


const portfolio = () => {
  return (
    <section id = 'portfolio'>
      <h5> My Recent Work </h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className = "portfolio__item-image">
                <img src = {image} alt={title} ></img>
              </div>
              <h3>{title}</h3>
            <div className = "portfolio__item-cta">
              <a href={github} className="btn" target="_blank">GitHub</a>
              {/* <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a> */}
            </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default portfolio