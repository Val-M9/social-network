import React from "react";
import styles from "./SearchUsers.module.css";
import userPhoto from "../../../assets/images/maleUser.png";
import { NavLink } from "react-router-dom";

const SearchUsers = (props) => {
  let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.wrapper}>
      {props.usersData.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={styles.photo}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {u.isFollowed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={styles.btn_red}
                  onClick={() => {
                    props.toggleFollowing(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={styles.btn_blue}
                  onClick={() => {
                    props.toggleFollowing(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
        </div>
      ))}
      <div className={styles.cursor}>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? styles.selectedPage : styles.none
              }
              onClick={() => {
                props.onChangePage(p);
              }}
            >
              {p + " "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SearchUsers;
