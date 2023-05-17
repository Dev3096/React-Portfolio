import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id = 'services'>
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> Software Testing and Methodologies</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Expertise in both manual and automation testing for mobile and web applications.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Proficient in identifying testing needs and opportunities and creating effective manual test plans, test cases, and test scripts.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Extensive experience with cross-browser testing, bug reporting, and bug resolution, contributing to overall performance improvement.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Skilled in designing and maintaining Selenium WebDriver automated test cases using TestNG for regression testing.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ability to handle sprints, manage test execution, and work with product and sprint backlogs.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Experience in ETL testing, SQL query development, and data validation to ensure data completeness, integrity, and accuracy.</p>
            </li>
          </ul>
        </article> 

        <article className="service">
          <div className="service__head">
            <h3> Software Development </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Proficient in software development using languages such as Python, Java, and React.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Experience in front-end development using HTML, CSS, and JavaScript to create intuitive and responsive user interfaces.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Knowledge of software development frameworks and libraries, such as Angular, to enhance development efficiency and code reusability.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Understanding of software development lifecycle (SDLC) and agile methodologies, ensuring the delivery of high-quality software solutions within project timelines.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Familiarity with RESTful APIs and integration of APIs into software applications.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Familiarity with version control systems like Git and GitHub for code collaboration and version management.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3> Communication and Collaboration </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ability to effectively communicate complex technical concepts to both technical and non-technical stakeholders, fostering a clear understanding of testing processes and outcomes.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Strong interpersonal skills, allowing for effective teamwork, conflict resolution, and relationship building within diverse teams.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Proactive approach to communication, keeping stakeholders informed about testing progress, risks, and issues in a timely manner.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Ability to adapt communication style to cater to different audiences, including technical team members, project managers, and executives.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Skilled in documenting and presenting test results, metrics, and reports to convey testing findings and recommendations effectively.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon"/>
              <p>Experience facilitating user acceptance testing (UAT) sessions, collaborating with end users to gather feedback and address any concerns or issues.</p>
            </li>
          </ul>
        </article>


      </div>

    </section>
  )
}

export default Services