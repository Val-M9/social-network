import React, { useState } from "react";

const ProfileStatus = (props) => {
  const [isEdit, setEdit] = useState(false);
  const handleInput = () => {
    setEdit(!isEdit);
  };
  return (
    <div onDoubleClick={handleInput}>
      {isEdit ? (
        <input autoFocus={true} placeholder={"hodor"}></input>
      ) : (
        <span>{props.status}</span>
      )}
    </div>
  );
};

export default ProfileStatus;
