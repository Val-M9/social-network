import React from "react";
import { Form, Field } from "react-final-form";
import { TextArea } from "../../../common/FormControls/FormControls";
import { maxLengthCreator } from "../../../utils/validators";

const AddPostForm = (props) => {
  return (
    <Form
      name="addPost"
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              validate={maxLengthCreator(10)}
              component={TextArea}
              name={"addNewPost"}
            />
          </div>
          <button>Add Post</button>
        </form>
      )}
    </Form>
  );
};

export default AddPostForm;
