import React from "react";
import Dialog from "./Dialog/Dialog";
import classes from "./DialogList.module.css"
import DialogList from "./Dialog/DialogList";
import {connect} from "react-redux";

const mapDialogElementsToProps = (state) => {
    return {
        dialogElements: state.dialogPage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>)
    }
}
const DialogListContainer = connect(mapDialogElementsToProps)(DialogList);
export default DialogListContainer;