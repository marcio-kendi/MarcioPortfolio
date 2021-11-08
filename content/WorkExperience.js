import styles from '../styles/Home.module.scss'
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class WorkExp extends Component {
  
  render() {
    return (
      <Carousel className={styles.carouselRoot}>
        <div className={styles.menu}>
            <h2>Digital Developer</h2>
            <div className={'d-flex justify-content-between'}>
              <span>dentsu</span><span className={styles.fontSml}>May 2019 – Present</span>
            </div>
            <hr/>
            <h3>Responsibilities</h3>
            <ul>
              <li>Working with EDP to review requirements, produce suitable solutions and estimates.</li>
              <li>Working closely with Designers and Creative Team to bring the best job solution</li>
              <li>Producing software according to approved design.</li>
              <li>Maintaining and supporting multiple projects.</li>
            </ul><br/>
            <h3>Key Achievements</h3>
            <ul>
              <li>Complete all phases of software development life cycle including analysis, estimation, design, development, testing and support</li>
              <li>Write performant and working front-end code, in language suited to the task and client</li>
              <li>Work on multiple projects with multiple deadlines</li>
              <li>Communicate clearly and effectively with EDP</li>
              <li> Solve problems</li>
            </ul>
        </div>
        <div className={styles.menu}>
            <h2>Digital Developer</h2>
            <div className={'d-flex justify-content-between'}>
              <span>VMLY&#38;R</span><span className={styles.fontSml}>August 2017 – May 2019</span>
            </div>
            <hr/>
            <h3>Responsibilities</h3>
            <ul>
              <li>Working with EDP to review requirements, produce suitable solutions and estimates.</li>
              <li>Working closely with Designers and Creative Team to bring the best job solution</li>
              <li>Producing software according to approved design.</li>
              <li>Maintaining and supporting multiple projects.</li>
            </ul>
        </div>
        <div className={styles.menu}>
            <h2>Front-End Developer</h2>
            <div className={'d-flex justify-content-between'}>
              <span>Payport Limited</span><span className={styles.fontSml}>May 2017 – August 2017</span>
            </div>
            <hr/>
            <h3>Responsibilities</h3>
            <ul>
              <li>Organise tutoring environment to promote productivity and learning.</li>
              <li>Monitor student performance or assist students in academic environments.</li>
              <li>Reviewing worksheets or other assignments</li>
              <li>Provide feedback to students using positive reinforcement techniques.</li>
              <li>Research or recommend textbooks, software, equipment, or other learning materials to complement tutoring.</li>
              <li>Review class material with students by discussing text, working solutions to problems.</li>
            </ul>
            <h3>Key Achievements</h3>
            <ul>
              <li>Learned how to listen, help, communicate and respect through tutoring.</li>
              <li>Helped every student to understand each subject faced.</li>
              <li>Managed all the tasks and finished them.</li>
            </ul>
        </div>
        <div className={styles.menu}>
            <h2>Internship</h2>
            <div className={'d-flex justify-content-between'}>
              <span>Core Technology Brokers Ltd.</span><span className={styles.fontSml}>April 2015</span>
            </div>
            <hr/>
            <h3>Responsibilities</h3>
            <ul>
              <li>Maintenance: Desktops and Laptops.</li>
              <li>Installing hardware and software.</li>
            </ul>
            <h3>Key Achievements</h3>
            <ul>
              <li>Learned how to be a team player.</li>
            </ul>
        </div>
        <div className={styles.menu}>
            <h2>Developer Internship</h2>
            <div className={'d-flex justify-content-between'}>
              <span>Argotechno Engineering</span><span className={styles.fontSml}>Oct 2012 – Jun 2014</span>
            </div>
            <hr/>
            <h3>Responsibilities</h3>
            <ul>
              <li>Software development as part of development team.</li>
              <li>Smartcard analysis and testing.</li>
            </ul>
            <h3>Key Achievements</h3>
            <ul>
              <li>Learned and supported the development and testing team.</li>
              <li>Completed all daily and monthly tasks on time.</li>
            </ul>
        </div>
      </Carousel>
    )
  }
}
export default WorkExp;
