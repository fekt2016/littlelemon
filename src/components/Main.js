import { Fragment } from "react";
import About from "./Section/About/About";
import Meals from "./Section/Meal/Meals";
import Testimonial from "./Section/Testimonial/Testimonial";

const Main = () => {
  return (
    <Fragment>
      <Meals />
      <Testimonial />
      <About />
    </Fragment>
  );
};
export default Main;
