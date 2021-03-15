import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMidleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import appReducer from "./Reducers/AppReducer";
import authReducer from "./Reducers/AuthReducer";
import dialogsReducer from "./Reducers/DialogsReducer";
import friendsReducer from "./Reducers/FriendsReducer";
import navbarReducer from "./Reducers/NavbarReducer";
import profileReducer from "./Reducers/ProfileReducer";
import searchUsersReducer from "./Reducers/SearchUsersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navigation: navbarReducer,
  friendsPage: friendsReducer,
  usersPage: searchUsersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMidleware))
);

window.__store__ = store;

export default store;
