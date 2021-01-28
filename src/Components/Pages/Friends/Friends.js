import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Friends.module.css";

const Friends = (props) => {
  let friends = props.friendsData.map((item) => {
    return (
      <div key={item.id} className={styles.items}>
        <img src={item.ava} alt="ava" />
        <span>{item.name}</span>
      </div>
    );
  });
  return (
    <div>
      <h4 className={styles.wrapper}>My friends</h4>
      <div>{friends}</div>
      <NavLink to="search-users">
        <button className={styles.button}>
          Search for more friends &#128270;
        </button>
      </NavLink>
    </div>
  );
};

export default Friends;
