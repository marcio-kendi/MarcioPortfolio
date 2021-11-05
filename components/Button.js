import styles from '../styles/Home.module.scss'

export function Button({menuName, onclick}) {
  return (
  <span className={['col-3 text-center d-flex justify-content-center']}>
    <span className={styles.btn} onClick={onclick}>
      <h3>{menuName}</h3>
    </span>
  </span>
  )
}