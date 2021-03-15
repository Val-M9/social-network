import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { login } from "../../../redux/Reducers/AuthReducer";
import styles from "./LoginForm.module.css";

const Login = ({ isAuth, login }) => {
  const onSubmit = async (formData) => {
    const res = await login(
      formData.email,
      formData.password,
      formData.rememberMe
    );
    return res;
  };
  if (isAuth) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form__name}>
          <h1>Login</h1>
        </div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
