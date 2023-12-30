import React from 'react'
import './about.css'
import myImage from '../../assets/about1.jpeg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h4>Degree</h4>
                  <h5>Master of Science</h5>
                  <h6><i>San Jose State University</i></h6>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h4>Current GPA</h4>
                  <h5>3.7</h5>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h4>Major</h4>
                  <h5>Computer Software Engineering</h5>
              </article>

              

            </div>
            <p>
                👋 I'm Chinmayi Sunku. As a driven graduate student at San Jose State University,
                I am constantly seeking opportunities to expand my knowledge and skills in the technology industry.
                With a positive and proactive approach, I embrace challenges and am committed to gaining valuable
                experience. I aspire to secure a fulfilling career as a software engineer or software development
                engineer, utilizing my expertise to make meaningful contributions to the success of any organization.
                Thank you 💜
            </p>

          </div>
      </div>
    </section>
  )
}

export default About