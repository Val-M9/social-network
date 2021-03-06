import React from "react";
import { Field } from "react-final-form";

import styles from "./FormControl.module.css";

export const FormControl = ({ input, meta, child, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={styles.control}>
      {props.children}
      {showError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
export const createField = (validators, name, component, placeholder, type) => (
  <Field
    validate={validators}
    name={name}
    component={component}
    placeholder={placeholder}
    type={type}
  />
);
