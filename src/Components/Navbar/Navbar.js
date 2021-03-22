import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ navData }) => {
  let navItems = navData.map((item) => {
    return (
      <NavLink
        key={item.id}
        to={item.path}
        className={`${styles.nav} ${item.id === navData.length ? styles.lastItem : styles.item}`}
        activeClassName={styles.activeLink}
      >
        {item.name}
      </NavLink>
    );
  });
  return <div>{navItems}</div>;
};
export default Navbar;
