import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import SendMessageForm from "./SendMessageForm";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} ava={d.ava} />
  ));
  let messagesElements = props.dialogsData.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  let onSendMessage = (values) => {
    props.onSendMessage(values.newMessage);
  };

  return (
    <div className={styles.dialogs}>
      <div>{dialogsElements}</div>
      <div className={styles.textInput}>
        {messagesElements}
        <SendMessageForm onSubmit={onSendMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
