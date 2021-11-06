import styles from '../../styles/Home.module.scss'
import React, { Component } from 'react';

class Techskills extends Component {
  render() {
    return (
    <div className={styles.menu}>
        <h2>Technical Skills</h2>
        <hr/>
        <ul>
            <li>Frontend: HTML5, CSS (including transitions and animation), JavaScript</li>
            <li>Backend: C# .NET, C++, PHP, Node</li>
            <li>Libraries: JQuery, Bootstrap, Greensock, SASS, React</li>
            <li>Tools: npm, Git, Webpack</li>
            <li>Extras: EMV Transaction, EFTPOS, Dynamic Digital Billboard</li>
        </ul>
    </div>
    )
  }
}
export default Techskills;
