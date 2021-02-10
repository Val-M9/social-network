import React from "react";
import style from "./Post.module.css";
import cat from "../../../../../assets/images/cat.jfif";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src={cat} alt="cat" />
      {props.post}
      <div>like {props.likeCount}</div>
    </div>
  );
};

export default Post;
