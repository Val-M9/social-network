import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = ({ id, ava, name }) => {
  let path = "dialogs" + id;
  return (
    <div>
      <NavLink
        to={path}
        className={`${styles.dialog} ${styles.items}`}
        activeClassName={styles.active}
      >
        <img src={ava} alt="avatar" />
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
