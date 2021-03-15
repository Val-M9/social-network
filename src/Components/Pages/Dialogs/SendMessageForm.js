import React from "react";
import { Form } from "react-final-form";
import { createField, TextArea } from "../../common/FormControls/FormControls";
import { maxLengthCreator } from "../../utils/validators";

const SendMessageForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {createField(
            maxLengthCreator(300),
            "newMessage",
            TextArea,
            "Enter your message"
          )}
          <button>Send Message</button>
        </form>
      )}
    </Form>
  );
};

export default SendMessageForm;
