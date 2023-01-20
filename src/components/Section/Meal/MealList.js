import React from "react";
import classes from "./MealList.module.css";

export const MealList = (props) => {
  return (
    <li className={classes.meallist}>
      <img className={classes.mealimg} src={props.photo} alt="mealphoto" />
      <div className={classes.detail}>
        <div className={classes.cta}>
          <span>{props.name}</span>
          <span className={classes.price}>${props.price}</span>
        </div>
        <p className={classes["meal-text"]}>
          {props.detail}
        </p>
        <span className={classes.order}>Order a delivery</span>
      </div>
    </li>
  );
};
export default MealList;
