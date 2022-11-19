import React from 'react';
import { Modal } from '../modal/Modal'
import styles from '../../styles/Home.module.scss'

import TechnicalSkills from '../../content/TechnicalSkills'
import WorkExperience from '../../content/WorkExperience'
import Education from '../../content/Education'
import Hobbies from '../../content/Hobbies'

const content = {
  technical: TechnicalSkills,
  experience: WorkExperience,
  education: Education,
  hobbies: Hobbies,
}

const Button = ({onClick, menuName, dataId}) => {
  return (
    <span className={['col-12 col-md-3 mt-md-0 mt-3 text-center']} onClick={onClick} id={dataId}>
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
      <Button onClick={() => { setContentName('technical')}} menuName={'Technical Skills'} dataId={'technical'} />
      <Button onClick={() => { setContentName('experience') }} menuName={'Work experience'} dataId={'experience'} />
      <Button onClick={() => { setContentName('education')}} menuName={'Education'} dataId={'education'} />
      <Button onClick={() => { setContentName('hobbies') }} menuName={'Hobbies'} dataId={'hobbies'} />
      <Modal showModal={Boolean(Content)}>
          <Content />
          <button onClick={() => setContentName('')} id="closeBtn" >
            close
          </button>
      </Modal>
    </div>
  )
}
export default Menu;
