import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavList.module.css';

function NavList() {
  return (
    <ul className={classes.navlist}>
        <li className={classes['nav-item']}>
          <NavLink  className={classes.navlink} to="/home">
            Home
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink className={classes.navlink} to="/about">
            about
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink className={classes.navlink} to="/menu">
            menu
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink className={classes.navlink} to="/reservations">
            reservations
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink className={classes.navlink} to="/orderonline">
          order Online
          </NavLink>
        </li>
        <li className={classes['nav-item']}>
          <NavLink className={classes.navlink} to="/login">
            login
          </NavLink>
        </li>
      </ul>
  )
}

export default NavList