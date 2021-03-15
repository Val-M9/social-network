import React from "react";
import style from "./Post.module.css";
import cat from "../../../../../assets/images/cat.jfif";

const Post = ({ likeCount, post }) => {
  return (
    <div className={style.item}>
      <img src={cat} alt="cat" />
      {post}
      <div>like {likeCount}</div>
    </div>
  );
};

export default Post;
