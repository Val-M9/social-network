import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "../../../redux/Reducers/AuthReducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const onSubmit = async (formData) => {
    await props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
