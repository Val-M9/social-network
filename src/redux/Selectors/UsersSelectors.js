import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsersData = createSelector(getUsersSelector, (users) => {
  return users;
});

export const getUsersTotalCount = (state) => {
  return state.usersPage.usersTotalCount;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getCurrentPage = (state) => {
  return state.usersPage.page;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowingProgress = (state) => {
  return state.usersPage.followingInProgress;
};
