import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "dialogs" + props.id;
  return (
    <div>
      <NavLink
        to={path}
        className={`${styles.dialog} ${styles.items}`}
        activeClassName={styles.active}
      >
        <img src={props.ava} />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
