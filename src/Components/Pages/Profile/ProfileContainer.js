import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import Profile from "./Profile";
import { getProfile } from "../../../redux/Reducers/ProfileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 9;
    }
    this.props.getProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
// BEFORE REFACTOR

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithRouterContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getProfile })(WithRouterContainer);

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
