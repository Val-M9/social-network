import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import Profile from "./Profile";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../../redux/Reducers/ProfileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { getProfile, getStatus } = this.props;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    getProfile(userId);
    getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});
// BEFORE REFACTOR

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithRouterContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getProfile })(WithRouterContainer);

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
