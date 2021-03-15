import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ path, name }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to={path} activeClassName={styles.activeLink}>
          {name}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
