import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./Reducers/AuthReducer";
import dialogsReducer from "./Reducers/DialogsReducer";
import friendsReducer from "./Reducers/FriendsReducer";
import navbarReducer from "./Reducers/NavbarReducer";
import profileReducer from "./Reducers/ProfileReducer";
import searchUsersReducer from "./Reducers/SearchUsersReducer";
import thunkMidleware from "redux-thunk";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navigation: navbarReducer,
  friendsPage: friendsReducer,
  usersPage: searchUsersReducer,
  auth: authReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMidleware));

window.store = store;

export default store;
