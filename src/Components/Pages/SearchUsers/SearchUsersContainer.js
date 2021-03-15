import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
  toggleFollowing,
  follow,
  unfollow,
} from "../../../redux/Reducers/SearchUsersReducer";
import SearchUsers from "./SearchUsers";
import Preloader from "../../common/Preloader/Preloader";
import {
  getUsersData,
  getUsersTotalCount,
  getPageSize,
  getCurrentPage,
  getIsFetching,
  getFollowingProgress,
} from "../../../redux/Selectors/UsersSelectors";

class SearchUsersAPI extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onChangePage = (pageNumber) => {
    const { requestUsers, pageSize } = this.props;
    requestUsers(pageNumber, pageSize);
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <SearchUsers
          usersData={this.props.usersData}
          usersTotalCount={this.props.usersTotalCount}
          pageSize={this.props.pageSize}
          toggleFollowing={this.props.toggleFollowing}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  };
}

let mapStateToProps = (state) => {
  if (state.usersPage.users)
    return {
      userId: state.usersPage.users.map((u) => {
        return u.id;
      }),
      isFollowed: state.usersPage.users.map((u) => {
        return u.followed;
      }),
      usersData: getUsersData(state),
      usersTotalCount: getUsersTotalCount(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingProgress(state),
    };
};

const SearchUsersContainer = compose(
  connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    // toggleFollowing,
    follow,
    unfollow,
  })
)(SearchUsersAPI);
export default SearchUsersContainer;
