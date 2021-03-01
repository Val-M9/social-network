import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleFollowingProgress,
  getUsersTC,
  toggleFollowing,
  // follow,
  // unfollow,
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
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNumber) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize);
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
          // follow={this.props.follow}
          // unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    userId: state.usersPage.users.map((u) => {
      return u.id;
    }),
    usersData: getUsersData(state),
    usersTotalCount: getUsersTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state),
  };
};

const SearchUsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  toggleFollowingProgress,
  getUsersTC,
  toggleFollowing,
  // follow,
  // unfollow,
})(SearchUsersAPI);
export default SearchUsersContainer;
