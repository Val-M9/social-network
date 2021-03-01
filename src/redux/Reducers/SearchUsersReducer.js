import { usersAPI } from "../../api/api";
// const FOLLOW = "users/FOLLOW";
// const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "users/SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS";
const FOLLOW_UNFOLLOW = "users/FOLLOW-UNFOLLOW";

let initialState = {
  users: [],
  usersTotalCount: 0,
  pageSize: 6,
  page: 1,
  isFetching: false,
  followingInProgress: [],
};

const searchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              isFollowed: !action.isFollowed,
            };
          }
          return u;
        }),
      };
    // case FOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((u) => {
    //       if (u.id === action.userId) {
    //         return { ...u, isFollowed: true };
    //       }
    //       return u;
    //     }),
    //   };
    // case UNFOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((u) => {
    //       if (u.id === action.userId) {
    //         return { ...u, isFollowed: false };
    //       }
    //       return u;
    //     }),
    //   };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        usersTotalCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
export const followUnfollowSuccess = (userId, isFollowed) => ({
  type: FOLLOW_UNFOLLOW,
  isFollowed,
  userId,
});
// export const followSuccess = (userId) => ({ type: FOLLOW, userId });
// export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  page: pageNumber,
});
export const setUsersTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const getUsersTC = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let response = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setUsersTotalCount(response.totalCount));
};
export const toggleFollowing = (userId, isFollowed) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  if (!isFollowed) {
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followUnfollowSuccess(userId, isFollowed));
    }
    dispatch(toggleFollowingProgress(false, userId));
  } else {
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followUnfollowSuccess(userId, isFollowed));
    }
    dispatch(toggleFollowingProgress(false, userId));
  }
};
// export const unfollow = (userId) => async (dispatch) => {
//   dispatch(toggleFollowingProgress(true, userId));
//   let response = await usersAPI.unfollow(userId);
//   if (response.data.resultCode === 0) {
//     dispatch(unfollowSuccess(userId));
//   }
//   dispatch(toggleFollowingProgress(false, userId));
// };
// export const follow = (userId) => async (dispatch) => {
//   dispatch(toggleFollowingProgress(true, userId));
//   let response = await usersAPI.follow(userId);
//   if (response.data.resultCode === 0) {
//     dispatch(followSuccess(userId));
//   }
//   dispatch(toggleFollowingProgress(false, userId));
// };
export default searchUsersReducer;
