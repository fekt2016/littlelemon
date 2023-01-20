import React from "react";
import classes from "./Testimonial.module.css";
import TestList from "./TestList";

const Testimonial = () => {
  return (
    <section className={classes.Testimonial}>
      <div className={classes.test}>
        <h3 className={classes.heading}>testimonial</h3>
        <ul className={classes["text-item"]}>
          <TestList />
          <TestList />
          <TestList />
          <TestList />
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
