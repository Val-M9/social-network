import React from "react";
import styles from "./MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

const MyPosts = (props) => {
  let postItems = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.wrapper}>
      <h4>My Posts</h4>
      <div>
        <textarea onChange={onPostChange} value={props.newPostText} />
      </div>
      <button className={styles.button} onClick={onAddPost}>
        Add Post
      </button>
      {postItems}
    </div>
  );
};

export default MyPosts;
