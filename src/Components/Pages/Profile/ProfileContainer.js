import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfileData } from "../../../redux/Reducers/ProfileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 9;
    }
    this.props.setProfileData(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let WithRouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfileData })(
  WithRouterContainer
);
