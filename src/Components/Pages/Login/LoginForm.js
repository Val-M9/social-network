import { Form, Field } from "react-final-form";
import { Input } from "../../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
  composeValidators,
} from "../../utils/validators";
import styles from "./LoginForm.module.css";
import { FORM_ERROR } from "final-form";

const LoginForm = (props) => {
  return (
    <Form
      name="login"
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit} className={styles.login}>
          <Field
            validate={composeValidators(required, maxLengthCreator(30))}
            name="email"
          >
            {({ input, meta }) => (
              <div>
                <input {...input} placeholder={"Login"} />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span>{meta.error || meta.submitError}</span>
                )}
              </div>
            )}
          </Field>
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
          {submitError && <div>{submitError}</div>}
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
