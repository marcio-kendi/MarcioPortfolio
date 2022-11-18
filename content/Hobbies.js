import styles from "../styles/Home.module.scss";
import React, { Component } from "react";

class Hobbies extends Component {
  render() {
    return (
      <div className={styles.small}>
        <h2>Hobbies</h2>
        <hr />
        <div className="pb-3">
          <h4>Bodybuilding</h4>
          <ul>
            <li>🏆 Mr. Wellington 2022</li>
            <li>🥉 3rd Place Wellington 2021</li>
            <li>🥇 1st Place New Zealand Nationals 2019</li>
            <li>🏆 Mr. Classic Auckland 2019</li>
            <li>🏆 Mr. Classic Auckland 2018</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Hobbies;
