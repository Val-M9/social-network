import { profileAPI } from "../../api/api";
const ADD_POST = "profile/ADD-POST";
const DELETE_POST = "profile/DELETE-POST";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET-STATUS";

let initialState = {
  posts: [
    { id: 1, post: "Hi, need to talk", likeCount: "10" },
    { id: 2, post: "It's my first post", likeCount: "4" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case ADD_POST:
      let newPost = {
        id: 10,
        post: action.addNewPost,
        likeCount: 3,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const addPost = (addNewPost) => ({ type: ADD_POST, addNewPost });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
