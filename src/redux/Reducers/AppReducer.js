import { getIsAuth } from "./AuthReducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getIsAuth());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
