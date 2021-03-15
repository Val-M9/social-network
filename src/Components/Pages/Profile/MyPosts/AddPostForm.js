import React from "react";
import { Form } from "react-final-form";
import {
  createField,
  TextArea,
} from "../../../common/FormControls/FormControls";
import { maxLengthCreator } from "../../../utils/validators";

const AddPostForm = ({ onSubmit }) => {
  return (
    <Form
      name="addPost"
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {createField(maxLengthCreator(50), "addNewPost", TextArea)}
          <button>Add Post</button>
        </form>
      )}
    </Form>
  );
};

export default AddPostForm;
