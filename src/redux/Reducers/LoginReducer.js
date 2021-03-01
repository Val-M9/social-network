import { loginAPI } from "../../api/api";

const LOGIN = "login/LOGIN";

let inintialState = {
  email: "",
  password: "",
};

const loginReducer = (state = inintialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, email: action.email, password: action.password };
    default:
      return state;
  }
};
export const setLogin = (email, password) => ({ type: LOGIN, email, password });
export const LogIn = (email, password) => async (dispatch) => {
  let response = await loginAPI.logIn(email, password);
  if (response.data.resultCode === 0) {
    dispatch(setLogin(email, password));
  }
};

export default loginReducer;
