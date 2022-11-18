import styles from "../../styles/Home.module.scss";

const SpotInfo = () => {
  return (
    <div className={styles.menu}>
      <h2>Front-end Developer</h2>
      <div className={"d-flex justify-content-between"}>
        <span>Spotlight Reporting</span>
        <span className={styles.fontSml}>February 2022 – December 2022</span>
      </div>
      <hr />
      <h3>Responsibilities</h3>
      <ul>
        <li>
          Provide guidance and collaboration for web design and development to
          improve the front-end of our web platform, ensuring that it is
          properly architected and specified.{" "}
        </li>
        <li>
          Collaborate on the creation of on brand web experiences that delight
          end users adhering to web standards and libraries.
        </li>
        <li>
          Collaborate with business, technical and management teams on front-end
          design, UX and UI, and front-end development.
        </li>
        <li>
          Translate ideas, designs and concepts into user interface mock-ups and
          then on to functional websites or web apps.
        </li>
        <li>
          Push our front-end development focusing on ReactJS, Typescript,
          JavaScript ES6, HTML5, Unit testing (Jest), Playwright and progressive
          CSS and related technologies.
        </li>
        <li>
          Help our QA team to implement automated front-end testing and
          validation tools for CSS and JavaScript changes.
        </li>
        <li>
          Measure and improve front end performance of the site and integrated
          web applications.
        </li>
      </ul>
    </div>
  );
};
export default SpotInfo;
