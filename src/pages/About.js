import React from "react";
import classes from "./About.css";
import Img from "../assets/about.jpg"
const AboutPage = () => {
  return (
    <div>
    <div class="about-section">
  <h1>About Us Page</h1>
</div>

<div className={classes.row}>
  <div className={classes.column}>
    <div className={classes.card}>
      <img src={Img} alt="Jane" class="width:100%"/>
      <div className={classes.container}>
        <h2>Utkarsh Rai</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>utkarshrai2121@gmail.com</p>
        <p><button className={classes.button}>Contact</button></p>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
};

export default AboutPage;
