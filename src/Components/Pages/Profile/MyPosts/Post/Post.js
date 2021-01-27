import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2538-CUSA05620_00-AV00000000000068/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000" />
      {props.message}
      <div>like {props.likeCount}</div>
    </div>
  );
};

export default Post;
