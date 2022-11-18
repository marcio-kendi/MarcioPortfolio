import styles from "../../styles/Home.module.scss";

const VmlyrInfo = () => {
  return (
    <div className={styles.menu}>
      <h2>Digital Developer</h2>
      <div className={"d-flex justify-content-between"}>
        <span>VMLY&#38;R</span>
        <span className={styles.fontSml}>August 2017 – May 2019</span>
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
    </div>
  );
};
export default VmlyrInfo;
