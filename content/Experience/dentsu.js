import styles from "../../styles/Home.module.scss";

const DentsuInfo = () => {
  return (
    <div className={styles.menu}>
      <h2>Digital Developer</h2>
      <div className={"d-flex justify-content-between"}>
        <span>dentsu</span>
        <span className={styles.fontSml}>May 2019 – December 2021</span>
      </div>
      <hr />
      <h3>Responsibilities</h3>
      <ul>
        <li>
          Working with EDP to review requirements, produce suitable solutions
          and estimates.
        </li>
        <li>
          Working closely with Designers and Creative Team to bring the best job
          solution
        </li>
        <li>Producing software according to approved design.</li>
        <li>Maintaining and supporting multiple projects.</li>
      </ul>
      <br />
      <h3>Key Achievements</h3>
      <ul>
        <li>
          Complete all phases of software development life cycle including
          analysis, estimation, design, development, testing and support
        </li>
        <li>
          Write performant and working front-end code, in language suited to the
          task and client
        </li>
        <li>Work on multiple projects with multiple deadlines</li>
        <li>Communicate clearly and effectively with EDP</li>
        <li> Solve problems</li>
      </ul>
    </div>
  );
};
export default DentsuInfo;
