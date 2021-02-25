import { Form, Field } from "react-final-form";
import { Input } from "../../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
  composeValidators,
} from "../../utils/validators";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <Form
      name="login"
      onSubmit={(values) => {
        return props.onSubmit(values);
      }}
    >
      {({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit} className={styles.login}>
          <Field
            validate={composeValidators(required, maxLengthCreator(30))}
            name="email"
            component={Input}
            placeholder={"Email"}
          ></Field>
          <Field
            validate={composeValidators(required, maxLengthCreator(30))}
            name={"password"}
            component={Input}
            placeholder={"Password"}
            type="password"
          >
            {/* {({ input, meta }) => (
              <div>
                <input {...input} type="password" placeholder={"password"} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )} */}
          </Field>
          <div>
            {submitError && <div style={{ color: "#800" }}>{submitError}</div>}
          </div>
          <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
            Remember me
          </div>
          <button>Login</button>
        </form>
      )}
    </Form>
  );
};

export default LoginForm;
