import React from "react";
import styles from '../../styles/Home.module.scss'
import {useSpring, animated} from 'react-spring'

export const Modal = ({showModal, setShowModal, selectedMenu}) => {

  const animation = useSpring ({
    config: {
      duration: 250
    },
    opacity: showModal ?  1 : 0
  })

  return <>{
      showModal ? 
        <animated.div style={animation}>
          <div className={styles.modal} >
            {selectedMenu}
            <button className="toggle-button" onClick={() => setShowModal(prev => !prev)} >
              close
            </button>
          </div>
      </animated.div> 
      : null
    }
  </>
}