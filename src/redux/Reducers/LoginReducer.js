import { loginAPI } from "../../api/api";

const LOGIN = "LOGIN";

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
export const LogIn = (email, password) => (dispatch) => {
  loginAPI.logIn(email, password).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setLogin(email, password));
    }
  });
};

export default loginReducer;
