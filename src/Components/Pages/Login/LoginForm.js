import { Form } from "react-final-form";
import { createField, Input } from "../../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
  composeValidators,
} from "../../utils/validators";
import styles from "./LoginForm.module.css";

const LoginForm = ({ onSubmit }) => {
  return (
    <Form
      name="login"
      onSubmit={(values) => {
        return onSubmit(values);
      }}
    >
      {({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.email}>
            {createField(
              composeValidators(required, maxLengthCreator(40)),
              "email",
              Input,
              "Email",
              null
            )}
          </div>
          {createField(
            composeValidators(required, maxLengthCreator(30)),
            "password",
            Input,
            "Password",
            "password"
          )}
          <div>
            {submitError && <div style={{ color: "#800" }}>{submitError}</div>}
          </div>
          <div>
            {createField(null, "rememberMe", Input, null, "checkbox")}
            Remember me
          </div>
          <button className={styles.button}>Login</button>
        </form>
      )}
    </Form>
  );
};

export default LoginForm;
