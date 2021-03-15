import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.jfif";
import { NavLink } from "react-router-dom";

const Header = ({ login, logout, isAuth }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.loginBlock}>
        {isAuth ? (
          <div>
            {login}
            <button className={styles.btn} onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
