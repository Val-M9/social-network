import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  const [editInput, setEditInput] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const toggleInput = () => {
    setEditInput(!editInput);
    props.updateStatus(status);
  };
  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };
  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      toggleInput(status);
    }
  };

  return (
    <div onDoubleClick={toggleInput}>
      {editInput ? (
        <input
          value={status}
          onChange={onStatusChange}
          onKeyDown={onPressEnter}
          onBlur={toggleInput}
          autoFocus={true}
        ></input>
      ) : (
        <span>
          {props.status || (
            <span style={{ color: "#999" }}>Here can be your status</span>
          )}
        </span>
      )}
    </div>
  );
};

export default ProfileStatus;
