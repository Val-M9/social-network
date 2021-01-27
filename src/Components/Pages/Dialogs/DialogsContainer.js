import React from "react";
import { connect } from "react-redux";
import {
  sendMessageAC,
  updateMessageAC,
} from "../../../redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => {
      dispatch(sendMessageAC());
    },
    onChangeMessage: (text) => {
      dispatch(updateMessageAC(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
