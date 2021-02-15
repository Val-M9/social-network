import React from "react";
import { Form, Field } from "react-final-form";
import { TextArea } from "../../common/FormControls/FormControls";
import { maxLengthCreator } from "../../utils/validators";

const SendMessageForm = (props) => {
  return (
    <Form
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            validate={maxLengthCreator(5)}
            component={TextArea}
            name={"newMessage"}
            placeholder={"Enter your message"}
          />
          <button>Send Message</button>
        </form>
      )}
    </Form>
  );
};

export default SendMessageForm;
