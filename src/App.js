import React, { Component } from "react";
import { Route, withRouter, HashRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { initializeApp } from "./redux/Reducers/AppReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/ReduxStore";

const Login = React.lazy(() => import("./Components/Pages/Login/Login"));
const ProfileContainer = React.lazy(() => import("./Components/Pages/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Components/Pages/Dialogs/DialogsContainer"));
const SearchUsersContainer = React.lazy(() => import("./Components/Pages/SearchUsers/SearchUsersContainer"));
const Settings = React.lazy(() => import("./Components/Pages/Settings/Settings"));

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
        <Navbar navData={this.props.navigation} />
        <React.Suspense fallback={<Preloader />}>
          <div className="app-wrapper-content">
            <Route path="/login" render={() => <Login />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/search-users" render={() => <SearchUsersContainer />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </React.Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  navigation: state.navigation,
  friendsPage: state.friendsPage,
});

const AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SocialNetworkApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
export default SocialNetworkApp;
