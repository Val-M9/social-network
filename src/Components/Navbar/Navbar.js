import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to={props.path} activeClassName={styles.activeLink}>
          {props.name}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
