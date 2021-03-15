import { NavLink } from "react-router-dom";

import userPhoto from "../../../assets/images/maleUser.png";
import styles from "./SearchUsers.module.css";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              className={styles.photo}
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="avatar"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={styles.btn_red}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              className={styles.btn_blue}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={styles.name}>{user.name}</div>
    </div>
  );
};

export default User;
