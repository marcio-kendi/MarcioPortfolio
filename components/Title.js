import styles from "../styles/Home.module.scss";
import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h1 className={styles.title}>{this.props.tname}</h1>;
  }
}
export default Title;
