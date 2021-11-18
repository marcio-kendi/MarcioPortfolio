import React from 'react';
import { Modal } from '../modal/Modal'
import styles from '../../styles/Home.module.scss'

import TechnicalSkills from '../../content/TechnicalSkills'
import WorkExp from '../../content/WorkExperience'
import Education from '../../content/Education'
import Hobbies from '../../content/Hobbies'

const content = {
  technical: TechnicalSkills,
  experience: WorkExp,
  education: Education,
  hobbies: Hobbies,
}

const Button = ({onClick, menuName}) => {
  return (
    <span className={['col-12 col-md-3 mt-md-0 mt-3 text-center']} onClick={onClick}>
      <span className={styles.btn}>
        <h3>{menuName}</h3>
      </span>
    </span>
  )
}

const Menu = () => {
  const [contentName, setContentName] = React.useState('');

  const Content = content[contentName];

  return (
    <div className="row">
      <Button onClick={() => { setContentName('technical')}} menuName={'Technical Skills'} />
      <Button onClick={() => { setContentName('experience') }} menuName={'Work experience'} />
      <Button onClick={() => { setContentName('education')}} menuName={'Education'} />
      <Button onClick={() => { setContentName('hobbies') }} menuName={'Hobbies'} />
      <Modal showModal={Boolean(Content)}>
          <Content />
          <button onClick={() => setContentName('')} >
            close
          </button>
      </Modal>
    </div>
  )
}
export default Menu;
