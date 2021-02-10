import React from "react";
import { Form, Field } from "react-final-form";

const AddMessageForm = (props) => {
  return (
    <Form
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            component={"textarea"}
            name={"newMessage"}
            placeholder={"Enter your message"}
          />
          <button>Send Message</button>
        </form>
      )}
    </Form>
  );
};

export default AddMessageForm;
