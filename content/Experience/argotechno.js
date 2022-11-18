import styles from "../../styles/Home.module.scss";

const ArgoInfo = () => {
  return (
    <div className={styles.menu}>
      <h2>Developer Internship</h2>
      <div className={"d-flex justify-content-between"}>
        <span>Argotechno Engineering</span>
        <span className={styles.fontSml}>Oct 2012 – Jun 2014</span>
      </div>
      <hr />
      <h3>Responsibilities</h3>
      <ul>
        <li>Software development as part of development team.</li>
        <li>Smartcard analysis and testing.</li>
      </ul>
      <h3>Key Achievements</h3>
      <ul>
        <li>Learned and supported the development and testing team.</li>
        <li>Completed all daily and monthly tasks on time.</li>
      </ul>
    </div>
  );
};
export default ArgoInfo;
