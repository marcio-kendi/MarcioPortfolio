import React from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/Home.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { auto } from "@popperjs/core";
import styled from "styled-components";

function IFrame({ children }) {
  const [ref, setRef] = React.useState();
  const container = ref?.contentDocument?.body;

  return (
    <iframe title="iframe" ref={setRef}>
      {container && createPortal(children, container)}
    </iframe>
  );
}
// const CustomIFrame = styled.iframe`
//     display: flex!important;
//     width: auto!important;
//     margin: 0 10px!important;
// `

const Work = () => {
  return (
    <Carousel>
      <div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5% 0 2%",
          }}
        >
          <h4>Movember</h4>
        </div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <iframe
            width="300px"
            height="460px"
            scrolling="no"
            style={{ width: "320px", margin: "0 10px", padding: "0" }}
            src="./workList/Movember/DisplayBanners/320x460/index.html"
          />
          <iframe
            width="160px"
            height="600px"
            scrolling="no"
            style={{ width: "160px", margin: "0 10px", padding: "0" }}
            src="./workList/Movember/DisplayBanners/160x600/index.html"
          />
          <div style={{ width: "300px", margin: "0 10px", padding: "0" }}>
            <iframe
              width="300px"
              height="250px"
              scrolling="no"
              style={{ width: "300px", margin: "0 10px 15px", padding: "0" }}
              src="./workList/Movember/DisplayBanners/300x250/index.html"
            />
            <iframe
              width="300px"
              height="250px"
              scrolling="no"
              style={{ width: "300px", margin: "0 10px", padding: "0" }}
              src="./workList/Movember/DisplayBanners/300x250_2/index.html"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5% 0 2%",
          }}
        >
          <h4>Pizza Hutt</h4>
        </div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <iframe
            width="300px"
            height="600px"
            scrolling="no"
            style={{ width: "300px", margin: "0 10px", padding: "0" }}
            src="./workList/PizzaHutt/DisplayBanners/300x600/index.html"
          />
          <iframe
            width="300px"
            height="600px"
            scrolling="no"
            style={{ width: "300px", margin: "0 10px", padding: "0" }}
            src="./workList/PizzaHutt/DisplayBanners/300x600_2/index.html"
          />
          <div style={{ width: "300px", margin: "0 10px", padding: "0" }}>
            <iframe
              width="300px"
              height="250px"
              scrolling="no"
              style={{ width: "300px", margin: "0 10px 15px", padding: "0" }}
              src="./workList/PizzaHutt/DisplayBanners/300x250/index.html"
            />
            <iframe
              width="300px"
              height="250px"
              scrolling="no"
              style={{ width: "300px", margin: "0 10px", padding: "0" }}
              src="./workList/PizzaHutt/DisplayBanners/300x250_2/index.html"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5% 0 2%",
          }}
        >
          <h4>Dairy Works</h4>
        </div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <iframe
            width="300px"
            height="600px"
            scrolling="no"
            style={{ width: "300px", margin: "0 10px", padding: "0" }}
            src="./workList/DairyWorks/DisplayBanners/300x600/index.html"
          />
          <iframe
            width="160px"
            height="600px"
            scrolling="no"
            style={{ width: "160px", margin: "0 10px", padding: "0" }}
            src="./workList/DairyWorks/DisplayBanners/160x600/index.html"
          />
          <iframe
            width="300px"
            height="250px"
            scrolling="no"
            style={{ width: "300px", margin: "0 10px", padding: "0" }}
            src="./workList/DairyWorks/DisplayBanners/300x250/index.html"
          />
        </div>
      </div>
      <div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5% 0 2%",
          }}
        >
          <h4>Meridian Energy</h4>
        </div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <iframe
            width="300px"
            height="600px"
            scrolling="no"
            style={{ width: "300px", margin: "0 10px", padding: "0" }}
            src="./workList/Meridian/DisplayBanners/300x600/index.html"
          />
          <iframe
            width="160px"
            height="600px"
            scrolling="no"
            style={{ width: "160px", margin: "0 10px", padding: "0" }}
            src="./workList/Meridian/DisplayBanners/160x600/index.html"
          />
          <div style={{ width: "300px", margin: "0 10px", padding: "0" }}>
            <iframe
              width="300px"
              height="250px"
              scrolling="no"
              style={{ width: "300px", margin: "0 10px 15px", padding: "0" }}
              src="./workList/Meridian/DisplayBanners/300x250/index.html"
            />
            <iframe
              width="300px"
              height="250px"
              scrolling="no"
              style={{ width: "300px", margin: "0 10px", padding: "0" }}
              src="./workList/Meridian/DisplayBanners/300x250_2/index.html"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5% 0 2%",
          }}
        >
          <h4>Tegel</h4>
        </div>
        <div
          className={["row"]}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <iframe
            width="300px"
            height="600px"
            scrolling="no"
            style={{ width: "300px", margin: "0 10px", padding: "0" }}
            src="./workList/Tegel/DisplayBanners/300x600/index.html"
          />
          <iframe
            width="300px"
            height="250px"
            scrolling="no"
            style={{ width: "300px", margin: "0 10px", padding: "0" }}
            src="./workList/Tegel/DisplayBanners/300x250/index.html"
          />
        </div>
        {/* <div className={['row']} style={{display: 'flex', justifyContent: 'center', marginBottom: '5%', alignItems: 'flex-start'}}>
            <img width="auto" height="auto" style={{width: '600px', objectFit: 'contain'}} src="./workList/Tegel/Website/Main.png" />
            <img width="200" height="auto" style={{width: '400px', objectFit: 'contain'}} src="./workList/Tegel/Website/Microsite.png" />
        </div> */}
      </div>
    </Carousel>
  );
};
export default Work;
