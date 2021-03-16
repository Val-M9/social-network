import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../Components/utils/obj-helpers";
const TOGGLE_FOLLOWING = "users/TOGGLE-FOLLOWING";
const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "users/SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS";

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
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
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
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let response = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setUsersTotalCount(response.totalCount));
};

const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    return dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
export const follow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
  };
};
export const unfollow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
  };
};

export default searchUsersReducer;

// think later how to do conditions if()... isFollowed returned an array by method map, so how to eject from it one value I need each time

// export const toggleFollowing = (userId, isFollowed) => {
//   return async (dispatch) => {
//     dispatch(toggleFollowingProgress(true, userId));
//     if (isFollowed) {
//       let response = await usersAPI.unfollow(userId);
//       if (response.data.resultCode === 0) {
//         dispatch(unfollowSuccess(userId, false));
//       }
//     } else {
//       let response = await usersAPI.follow(userId);
//       if (response.data.resultCode === 0) {
//         dispatch(followSuccess(userId, true));
//       }
//     }
//     dispatch(toggleFollowingProgress(false, userId));
//   };
// };
