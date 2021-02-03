import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getIsAuth } from "../../redux/Reducers/AuthReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getIsAuth();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getIsAuth })(HeaderContainer);
