import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Friends from "./Components/Pages/Friends/Friends";
import DialogsContainer from "./Components/Pages/Dialogs/DialogsContainer";
import SearchUsersContainer from "./Components/Pages/SearchUsers/SearchUsersContainer";
import ProfileContainer from "./Components/Pages/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Pages/Login/Login";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer data={props.state.navigation} />
      <div className="app-wrapper-content">
        <Route path="/login" render={() => <Login />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route
          path="/friends"
          render={() => <Friends friendsData={props.state.friendsPage} />}
        />
        <Route path="/search-users" render={() => <SearchUsersContainer />} />
      </div>
    </div>
  );
};

export default App;
