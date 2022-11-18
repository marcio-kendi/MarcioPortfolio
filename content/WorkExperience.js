import styles from "../styles/Home.module.scss";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DentsuInfo from "./Experience/dentsu";
import VmlyrInfo from "./Experience/vmlyr";
import PayportInfo from "./Experience/payport";
import CoreTechInfo from "./Experience/coretech";
import ArgoInfo from "./Experience/argotechno";
import SpotInfo from "./Experience/spotlightreporting";

class WorkExperience extends Component {
  render() {
    return (
      <Carousel className={styles.carouselRoot}>
        <SpotInfo />
        <DentsuInfo />
        <VmlyrInfo />
        <PayportInfo />
        <CoreTechInfo />
        <ArgoInfo />
      </Carousel>
    );
  }
}
export default WorkExperience;
