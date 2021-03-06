import React from "react";
import Header from "./Header";
import { StickyContainer, Sticky } from "react-sticky";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="AboutMe">
      <header>
        <Header />
      </header>
      <div className="about-me-info">
        <h1 className="about-me-info-h1">I'm Cankat</h1>
        <p className="about-me-info-p">I create cross-platform mobile apps.</p>
      </div>
    </div>
  );
}

export default AboutMe;
