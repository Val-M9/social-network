import React from "react";
import style from "./Message.module.css";

const Message = ({ message }) => {
  return <div className={style.color}>{message}</div>;
};

export default Message;
