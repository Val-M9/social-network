import { authAPI } from "../../api/api";
import { FORM_ERROR } from "final-form";

const SET_USER_DATA = "SET-USER-DATA";

let inintialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = inintialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getIsAuth = () => (dispatch) => {
  return authAPI.isAuth().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  return authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getIsAuth());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Serever error";
      return { [FORM_ERROR]: message };
    }
  });
};
export const logout = () => (dispatch) => {
  return authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
