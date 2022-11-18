import styles from "../styles/Home.module.scss";
import React, { Component } from "react";
import Frontend from "./Skills/frontend";
import Backend from "./Skills/backend";
import Libraries from "./Skills/libraries";
import Tools from "./Skills/tools";
import SrcControl from "./Skills/sourcecontrol";
import Design from "./Skills/design";
import Extras from "./Skills/extras";

class Techskills extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <div className={styles.small}>
          <h2>Technical Skills</h2>
          <hr />
          <div className={styles.grid2}>
            <div>
              <Frontend />
              <Backend />
              <Libraries />
              <SrcControl />
            </div>
            <div>
              <Tools />
              <Design />
              <Extras />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Techskills;
