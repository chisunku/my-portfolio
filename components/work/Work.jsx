import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbBrandWalmart } from "react-icons/tb";
import { SiCisco } from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
import { FaHourglassStart } from "react-icons/fa";

const Work = () => {
    return (
        <section id='experience'>
            <h2>My Experience</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2023 - Aug 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<TbBrandWalmart />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Walmart Inc.</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Software Engineering Intern</h4>
                    <p style={{'color': '#bebebe'}}>
                        •	Achieved 80% faster and more scalable push notification delivery by designing and implementing a high-performance microservice, enhancing user experience and engagement.
                        <br/>•	Reduced message latency with WebSocket’s for efficient and reliable communication.
                        <br/>•	Increased user engagement by 50% and decreased email notifications by 30%, orchestrating the end-to-end service lifecycle to provide customers with seamless access and utilization, enhancing their experience.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/>Spring Boot, Hibernate, React, Kafka, Microsoft Azure, Junit, Swagger, Figma (UX)
                    </p>
                </VerticalTimelineElement>  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Aug 2021 - Jul 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<SiCisco />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Cisco Systems</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Software Engineering</h4>
                    <p style={{'color': '#bebebe'}}>
                        •	Enriched Snowflake data and developed business dashboards for the SCM team by creating scripts and queries, resulting in increased data accuracy and completeness by 20%. 
                        <br/>•	Conducted data analysis to identify inefficiencies and optimization opportunities, leading to significant client cost savings of 30% and guiding clients in making informed business decisions. 
                        <br/>•	Collaborated with an agile team to migrate data from on-premises to the cloud, reducing downtime by 40% and ensuring data continuity while enhancing system reliability. Conducted testing and code reviews to maintain code quality.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> Snowflakes, Control-m, Python, shell scripts, RESTful APIs
                    </p>
                </VerticalTimelineElement>  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Feb 2021 - Jul 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<SiCisco />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Cisco Systems</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Software Intern</h4>
                    <p style={{'color': '#bebebe'}}>
                        •	Implemented proactive dashboards, ensuring uninterrupted operations by identifying and resolving system failures.
                        <br/>•	Optimized infrastructure allocation and cost management, achieving a significant 20% cost reduction.
                        <br/>•	Facilitated cross-functional collaboration, enhancing decision-making and cost-efficiency with easy access to essential metrics and data.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> SAP HANA, Tableau
                    </p>
                </VerticalTimelineElement>  

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c2c6c', color: '#fff', borderRadius: '2rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Feb 2021 - Jul 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<GiArchiveResearch />}
                >
                    <h3 className="vertical-timeline-element-title" style={{'color': '#4db5ff'}}>Ramaiah Institute of Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{'color': '#4db5ff'}}>Research Intern</h4>
                    <p style={{'color': '#bebebe'}}>
                        •	Collaboratively researched and developed(R&D) an innovative posture monitoring project with the team, advancing healthcare technology.
                        <br/>•	Processed sensor data using ETL techniques, enhancing patient data accuracy for healthcare professionals.
                        <br/>•	Designed and validated a user-friendly GUI, facilitating seamless data interpretation by medical practitioners.
                        <br/><br/><span style={{'color': '#4db5ff'}}>Technologies: </span> <br/> Java-Spring Boot
                    </p>
                </VerticalTimelineElement> 

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon = {<FaHourglassStart />}
                ></VerticalTimelineElement>

            </VerticalTimeline>
        </section>
    )
}

export default Work