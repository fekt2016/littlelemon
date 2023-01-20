import React from "react";
import classes from "./About.module.css";
import photo from '../../../asset/greek-salad-fresh.jpeg'
import photo1 from '../../../asset/bruschetta.jpeg'

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes["about-detail"]}>
        <h2 className={classes.heading}>little lemon</h2>
        <span>Chicago</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Provident, iste Lorem
          ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet
          consectetur adipisicing elit. Provident, iste
        </p>
      </div>
      <img className={`${classes.photo} ${classes.photo1}`} src={photo} alt='aboutphoto'/>
      <img className={`${classes.photo} ${classes.photo2}`} src={photo1} alt='aboutphoto'/>
    </section>
  );
};

export default About;
