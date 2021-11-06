import styles from '../../styles/Home.module.scss'
import React, { Component } from 'react';

class Hobbies extends Component {
  render() {
    return (
    <div className={styles.menu}>
        <h2>Hobbies</h2>
        <hr/>
        <div className="pb-3">
          <h4>Bodybuilding</h4>
          <ul>
            <li>2x Mr Classic Auckland</li>
            <li>1st Place NZ Nationals 2019</li>
            <li>3rd Place Wellington Championship 2021</li>
          </ul>
        </div>
        <div className="pb-3">
          <h4>Dancing</h4>
          <ul>
            <li>Forró</li>
            <li>Samba de gafieira</li>
            <li>Bolero</li>
            <li>Soltinho</li>
            <li>Bachata</li>
            <li>Salsa</li>
          </ul>
        </div>
    </div>
    )
  }
}
export default Hobbies;
