import styles from "../../styles/Home.module.scss";

const CoreTechInfo = () => {
  return (
    <div className={styles.menu}>
      <h2>Internship</h2>
      <div className={"d-flex justify-content-between"}>
        <span>Core Technology Brokers Ltd.</span>
        <span className={styles.fontSml}>April 2015</span>
      </div>
      <hr />
      <h3>Responsibilities</h3>
      <ul>
        <li>Maintenance: Desktops and Laptops.</li>
        <li>Installing hardware and software.</li>
      </ul>
      <h3>Key Achievements</h3>
      <ul>
        <li>Learned how to be a team player.</li>
      </ul>
    </div>
  );
};
export default CoreTechInfo;
