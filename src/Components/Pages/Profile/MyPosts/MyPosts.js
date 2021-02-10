import React from "react";
import styles from "./MyPosts.module.css";
import Post from "../MyPosts/Post/Post";
import AddPostForm from "./AddPostForm";

const MyPosts = (props) => {
  let postItems = props.posts.map((p) => (
    <Post key={p.id} post={p.post} likeCount={p.likeCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.addNewPost);
  };

  return (
    <div className={styles.wrapper}>
      <h4>My Posts</h4>
      <AddPostForm onSubmit={onAddPost} />
      {postItems}
    </div>
  );
};

export default MyPosts;
