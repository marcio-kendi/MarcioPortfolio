import styles from '../../styles/Home.module.scss'
import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
    <div className={styles.menu}>
        <h2>EDUCATION / TRAINING</h2>
        <hr/>
        <div className="pb-3">
          <h4>New Kiwi Career Success Programme</h4>
          <span>The Auckland Chamber of Commerce</span><br/>
          <span className={styles.lightColor, styles.fontSml}>March 2017</span>
        </div>
        <div className="pb-3">
          <h4>Diploma in Information Technology</h4>
          <span>Tasman International Academies</span><br/>
          <span className={styles.lightColor, styles.fontSml}>July 2015 – Nov 2016</span>
        </div>
        <div className="pb-3">
          <h4>Diploma in Computer Network Engineering</h4>
          <span>Avonmore Tertiary Institute</span><br/>
          <span className={styles.lightColor, styles.fontSml}>July 2014 – Jun 2015</span>
        </div>
        <div className="pb-3">
          <h4>Bachelor of Computer Science</h4>
          <span>Mackenzie University</span><br/>
          <span className={styles.lightColor, styles.fontSml}>Jan 2012 – Jun 2014</span>
        </div>
    </div>
    )
  }
}
export default Education;
