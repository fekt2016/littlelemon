import React from "react";
import logo from "../../asset/logo.png";
import classes from "./Nav.module.css";
import NavList from "./NavList";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <img style={{ width: 150 }} src={logo} alt="Logo" />
      <NavList />
    </nav>
  );
};
export default Nav;
