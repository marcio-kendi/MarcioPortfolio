import styles from "../styles/Nav.module.scss";
import React from "react";
import { useSpring, animated } from "react-spring";

const Navbar = ({ openMenu, parentCallback, setOpenMenu }) => {
  const [openSelection, setOpenSelection] = React.useState();

  const menuTransition = useSpring({
    config: {
      duration: 100,
    },
    transform: openMenu ? "scale(1)" : "scale(0.6)",
    display: openMenu ? "flex" : "none",
    zIndex: openMenu ? "1" : "0",
  });

  return (
    <>
      {openMenu ? (
        <animated.div className={styles.navbar} style={menuTransition}>
          <ul>
            <li>
              <button
                id="cv"
                onClick={() => {
                  setOpenSelection("cv");
                  parentCallback("cv");
                  setOpenMenu(false);
                }}
              >
                curriculum vitae
              </button>
            </li>
            <li>
              <button
                id="work"
                onClick={() => {
                  setOpenSelection("work");
                  parentCallback("work");
                  setOpenMenu(false);
                }}
              >
                work
              </button>
            </li>
            <li>
              <button
                id="contact"
                onClick={() => {
                  setOpenSelection("contact");
                  parentCallback("contact");
                  setOpenMenu(false);
                }}
              >
                contact me
              </button>
            </li>
          </ul>
        </animated.div>
      ) : (
        <animated.div className={styles.navbar} style={menuTransition}>
          <ul>
            <li>
              <button>curriculum vitae</button>
            </li>
            <li>
              <button>work</button>
            </li>
            <li>
              <button>contact me</button>
            </li>
          </ul>
        </animated.div>
      )}
    </>
  );
};
export default Navbar;
