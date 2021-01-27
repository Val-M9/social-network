import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleFollowingProgress,
  getUsersTC,
  follow,
  unfollow,
} from "../../../redux/Reducers/SearchUsersReducer";
import SearchUsers from "./SearchUsers";
import Preloader from "../../common/Preloader/Preloader";

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
  return {
    userId: state.usersPage.users.map((u) => {
      return u.id;
    }),
    usersData: state.usersPage.users,
    usersTotalCount: state.usersPage.usersTotalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const SearchUsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  toggleFollowingProgress,
  getUsersTC,
  follow,
  unfollow,
})(SearchUsersAPI);
export default SearchUsersContainer;
