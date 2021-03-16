import React, { Component } from "react";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";

import "./App.css";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Friends from "./Components/Pages/Friends/Friends";
import DialogsContainer from "./Components/Pages/Dialogs/DialogsContainer";
import SearchUsersContainer from "./Components/Pages/SearchUsers/SearchUsersContainer";
import ProfileContainer from "./Components/Pages/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Pages/Login/Login";
import { initializeApp } from "./redux/Reducers/AppReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/ReduxStore";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer data={this.props.navigation} />
        <div className="app-wrapper-content">
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route
            path="/friends"
            render={() => <Friends friendsData={this.props.friendsPage} />}
          />
          <Route path="/search-users" render={() => <SearchUsersContainer />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  navigation: state.navigation,
  friendsPage: state.friendsPage,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SocialNetworkApp;
