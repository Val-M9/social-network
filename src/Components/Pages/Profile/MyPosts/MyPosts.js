import React from "react";
import styles from "./MyPosts.module.css";
import Post from "../MyPosts/Post/Post";
import AddPostForm from "./AddPostForm";

const MyPosts = ({ posts, addPost }) => {
  let postItems = posts.map((p) => (
    <Post key={p.id} post={p.post} likeCount={p.likeCount} />
  ));

  let onAddPost = (values) => {
    addPost(values.addNewPost);
  };

  return (
    <div className={styles.wrapper}>
      <h4>My Posts</h4>
      <div className={styles.post}>
        <AddPostForm onSubmit={onAddPost} />
        {postItems}
      </div>
    </div>
  );
};

export default MyPosts;
