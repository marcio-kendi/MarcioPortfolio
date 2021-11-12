import React from "react";
import styles from '../../styles/Home.module.scss'
import {useSpring, animated} from 'react-spring'

export const Modal = ({showModal, children, hideModal}) => {

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
            {children}
          </div>
      </animated.div>
      : null
    }
  </>
}