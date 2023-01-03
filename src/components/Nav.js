
import React from "react";
import logo from "../asset/logo.png"
import classes from '../components/Nav.module.css';


const Nav = () => {
  return (
    <>
      <img style={{ width: 100 }} src={logo} alt="Logo" />
      <div className={classes.test}> test</div>
      {/* <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Menu</a>
        </li>
        <li>
            <a href="#">Reservations</a>
        </li>
        <li>
            <a href="#">Order Online</a>
        </li>
        <li>
            <a href="#">Login</a>
        </li>
      </ul> */}
    </>
  );
};
export default Nav;
