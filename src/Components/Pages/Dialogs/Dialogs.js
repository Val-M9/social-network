import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} ava={d.ava} />
  ));
  let messagesElements = props.dialogsData.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  let onSendMessage = () => {
    props.onSendMessage();
  };
  let onChangeMessage = (event) => {
    let text = event.target.value;
    props.onChangeMessage(text);
  };

  return (
    <div className={styles.dialogs}>
      <div>{dialogsElements}</div>
      <div>
        {messagesElements}
        <textarea
          className={styles.textInput}
          placeholder={"Enter your message"}
          onChange={onChangeMessage}
          value={props.dialogsData.newMessageText}
        />
        <button className={styles.button} onClick={onSendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
