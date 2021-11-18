import React from 'react';
import { createPortal } from "react-dom";
import styles from '../../styles/Home.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import FirstFile from '../workList/DairyWorks/DisplayBanners/300x250/index.html'

function IFrame({ children }) {
  const [ref, setRef] = React.useState();
  const container = ref?.contentDocument?.body;

  return (
    <iframe title="iframe" ref={setRef}>
      {container && createPortal(children, container)}
    </iframe>
  );
}

const Work = () => {
  return (
    
  <Carousel className={styles.carouselRoot}>
    <div className={styles.menu}>
      <iframe src="../workList/DairyWorks/DisplayBanners/300x250/index.html" />
    </div>
  </Carousel>
  )
}
export default Work;
