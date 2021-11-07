import styles from '../styles/Home.module.scss'
import React, { Component } from 'react';

class WorkExp extends Component {
  render() {
    return (
    <div className={styles.menu}>
        <h2>Digital Developer</h2><span>dentsu</span>
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
    )
  }
}
export default WorkExp;
