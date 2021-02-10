import { Form, Field } from "react-final-form";

const LoginForm = (props) => {
  return (
    <Form
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field component={"input"} name={"login"} placeholder={"Login"} />
          </div>
          <div>
            <Field
              component={"input"}
              name={"password"}
              placeholder={"Password"}
            />
          </div>
          <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
            Remember me
          </div>
          <button>Login</button>
        </form>
      )}
    </Form>
  );
};

export default LoginForm;
