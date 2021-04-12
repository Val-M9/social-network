import React, { useState, useEffect } from "react";
import styles from "./ProfileInfo.module.css";

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
    <div className={styles.status} onClick={toggleInput}>
      {editInput ? (
        <input
          value={status}
          onChange={onStatusChange}
          onKeyDown={onPressEnter}
          onBlur={toggleInput}
          autoFocus={true}
          maxLength="60"
        ></input>
      ) : (
        <div>{props.status || <label style={{ color: "#999" }}>Here can be your status</label>}</div>
      )}
    </div>
  );
};

export default ProfileStatus;
