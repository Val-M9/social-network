import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { sendMessageAC } from "../../../redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (newMessage) => {
      dispatch(sendMessageAC(newMessage));
    },
  };
};
// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
