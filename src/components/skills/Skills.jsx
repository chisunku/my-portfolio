import React from 'react'
import './Skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='skills'>
        <h2>My Skills</h2>
        <div className="container experience__container">
                <article className='experience__details'>
                    <div>
                        <div className='spacing'>
                            <h4>Programming skills</h4>
                            <h4 className='text-light'>Java, python, C, C++, JavaScript, C#</h4>
                        </div>

                        <div className='spacing'>
                            <h4>Web Technologies</h4>
                            <h4 className='text-light'>React, HTML, CSS</h4>
                        </div>
                    <h4>Cloud Technologies</h4>
                    <h4 className='text-light'>AWS, Azure, GCP</h4>
                    </div>
                </article>

                <article className='experience__details'>
                    <div>
                        <div className='spacing'>
                    <h4>Operating systems</h4>
                    <h4 className='text-light'>Windows, Unix/Linux, MacOS</h4>
                    </div>
                    <div className='spacing'>
                    <h4>Query Language</h4>
                    <h4 className='text-light'>MySQL, SQL, NoSQL, PostgreSQL</h4>
                    </div>
                    <h4>Other Technologies</h4>
                    <h4 className='text-light'>Snowflake, Tableau, Spring Boot,<br/> MongoDB, NodeJS, GIT, Azure, Android Studio,<br/> OpenAI, Firebase, Figma, Kubernetes</h4>
                    </div>
                </article>
        </div>
    </section>
  )
}

export default Experience