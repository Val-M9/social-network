import React, { useState } from "react";

const ProfileStatus = (props) => {
  const [editInput, setEditInput] = useState(false);
  const [status, setStatus] = useState(props.status);

  const toggleInput = () => {
    setEditInput(!editInput);
    props.updateStatus(status);
  };
  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div onDoubleClick={toggleInput}>
      {editInput ? (
        <input
          value={status}
          onChange={onStatusChange}
          onBlur={toggleInput}
          autoFocus={true}
        ></input>
      ) : (
        <span>{props.status || "Here can be your status"}</span>
      )}
    </div>
  );
};

export default ProfileStatus;
