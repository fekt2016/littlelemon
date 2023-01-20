import React from "react";
import Button from "../../../UI/Button";
import MealList from "./MealList";
import classes from "./Meals.module.css";
import greek from "../../../asset/greek salad.jpg";
import bruschetta from "../../../asset/photo2.jpeg";
import lemon from "../../../asset/lemon dessert.jpg";
const meal = [
  {
    id: 'm1',
    name: "Greek Salad",
    photo: `${greek}`,
    price: 12.89,
    detail:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 'm2',
    name: "bruschetta",
    photo: `${bruschetta}`,
    price: 10.09,
    detail:
      "Our bruschetta is made from grilled bread that has been smeared  with salt and olive oil.",
  },
  {
    id: 'm3',
    name: "Lemon dessert",
    photo: `${lemon}`,
    price: 5.99,
    detail:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  }
];

const Meals = () => {
  const meals = meal.map(mea => <MealList name={mea.name} photo={mea.photo} detail={mea.detail} price={mea.price} key={mea.id}/> )
  return (
    <section className={classes.meal}>
      <div className={classes["meals-header"]}>
        <h2 className={classes.h2}>specials</h2>
        <Button>online menu</Button>
      </div>
      <ul className={classes.meals}>
      {meals}
      </ul>
    </section>
  );
};

export default Meals;
