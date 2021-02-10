import React from "react";
import { Form, Field } from "react-final-form";

const AddPostForm = (props) => {
  return (
    <Form
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field component={"textarea"} name={"addNewPost"} />
          </div>
          <button>Add Post</button>
        </form>
      )}
    </Form>
  );
};

export default AddPostForm;
