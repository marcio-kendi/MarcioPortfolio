import styles from '../styles/Home.module.scss'
import React, { Component } from 'react';

class Techskills extends Component {
  render() {
    return (
    <div className={styles.menu}>
        <h2>Technical Skills</h2>
        <hr/>
        <div className="pb-3">
          <h4>Frontend</h4>
          <ul>
              <li>- HTML5</li>
              <li>- CSS (including transitions and animation)</li>
              <li>- JavaScript</li>
          </ul>
        </div>
        <div className="pb-3">
          <h4>Libraries</h4>
          <ul>
              <li>- JQuery</li>
              <li>- Bootstrap</li>
              <li>- Greensock</li>
              <li>- SASS</li>
              <li>- React</li>
          </ul>
        </div>
        <div className="pb-3">
          <h4>Tools</h4>
          <ul>
              <li>- npm</li>
              <li>- Git</li>
              <li>- Webpack</li>
          </ul>
        </div>
        <div className="pb-3">
          <h4>Extras</h4>
          <ul>
              <li>- EMV Transaction</li>
              <li>- EFTPOS</li>
              <li>- Dynamic Digital Billboard</li>
          </ul>
        </div>
    </div>
    )
  }
}
export default Techskills;
