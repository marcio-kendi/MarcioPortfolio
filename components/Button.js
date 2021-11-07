import styles from '../styles/Home.module.scss'
import React, { useState } from 'react';
import { Modal } from './modal/Modal.js'

const Button = ({menuName, selectedmenu}) => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {     
      setShowModal(prev => !prev);
  };
  
  return (
    <span className={['col-12 col-md-3 mt-md-0 mt-3 text-center']}>
      <span className={styles.btn} onClick={openModal} >
        <h3>{menuName}</h3>
      </span>
      <Modal showModal={showModal} setShowModal={setShowModal} onClick={openModal} selectedMenu={selectedmenu} />
    </span>
  )
}
export default Button;