import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMidleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import appReducer from "./Reducers/AppReducer";
import authReducer from "./Reducers/AuthReducer";
import dialogsReducer from "./Reducers/DialogsReducer";
import friendsReducer from "./Reducers/FriendsReducer";
import navbarReducer from "./Reducers/NavbarReducer";
import profileReducer from "./Reducers/ProfileReducer";
import searchUsersReducer from "./Reducers/SearchUsersReducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navigation: navbarReducer,
  friendsPage: friendsReducer,
  usersPage: searchUsersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMidleware));

window.store = store;

export default store;
