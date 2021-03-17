import React from "react";
import styles from "./SearchUsers.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const SearchUsers = (props) => {
  if (props.usersData) {
    return (
      <div>
        <div className={styles.wrapper}>
          {props.usersData.map((u) => (
            <User
              key={u.id}
              user={u}
              followingInProgress={props.followingInProgress}
              follow={props.follow}
              unfollow={props.unfollow}
            />
          ))}
        </div>
        <Paginator
          currentPage={props.currentPage}
          pageSize={props.pageSize}
          itemsTotalCount={props.usersTotalCount}
          onChangePage={props.onChangePage}
        />
      </div>
    );
  } else {
    return <div>Processing... Please Refresh The Page</div>;
  }
};

export default SearchUsers;
