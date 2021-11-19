import React from 'react';
import { createPortal } from "react-dom";
import styles from '../../styles/Home.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { auto } from '@popperjs/core';

function IFrame({ children }) {
  const [ref, setRef] = React.useState();
  const container = ref?.contentDocument?.body;

  return (
    <iframe title="iframe" ref={setRef}>
      {container && createPortal(children, container)}
    </iframe>
  );
}
// const iframe = {
//   margin: 0,
//   width: 'inherit',
//   display: 'flex',
// }

const Work = () => {
  return (
    
  <Carousel className={styles.carouselRoot}>
    <div className={styles.menu}>
        <iframe width="300px" height="600px" scrolling="no" src="./workList/DairyWorks/DisplayBanners/300x600/index.html" />
        <iframe width="300px" height="250px" scrolling="no" src="./workList/DairyWorks/DisplayBanners/300x250/index.html" />
        <iframe width="970px" height="250px" scrolling="no" src="./workList/DairyWorks/DisplayBanners/970x250/index.html" />
    </div>
  </Carousel>
  )
}
export default Work;
