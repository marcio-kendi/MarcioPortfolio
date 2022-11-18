import styles from "../../styles/Home.module.scss";

const PayportInfo = () => {
  return (
    <div className={styles.menu}>
      <h2>Front-End Developer</h2>
      <div className={"d-flex justify-content-between"}>
        <span>Payport Limited</span>
        <span className={styles.fontSml}>May 2017 – August 2017</span>
      </div>
      <hr />
      <h3>Responsibilities</h3>
      <ul>
        <li>
          Organise tutoring environment to promote productivity and learning.
        </li>
        <li>
          Monitor student performance or assist students in academic
          environments.
        </li>
        <li>Reviewing worksheets or other assignments</li>
        <li>
          Provide feedback to students using positive reinforcement techniques.
        </li>
        <li>
          Research or recommend textbooks, software, equipment, or other
          learning materials to complement tutoring.
        </li>
        <li>
          Review class material with students by discussing text, working
          solutions to problems.
        </li>
      </ul>
      <h3>Key Achievements</h3>
      <ul>
        <li>
          Learned how to listen, help, communicate and respect through tutoring.
        </li>
        <li>Helped every student to understand each subject faced.</li>
        <li>Managed all the tasks and finished them.</li>
      </ul>
    </div>
  );
};
export default PayportInfo;
