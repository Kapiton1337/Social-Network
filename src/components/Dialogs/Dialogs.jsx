import React from "react";
import DialogListContainer from "./DialogList/DialogListContainer";
import DialogArea from "./DialogArea/DialogArea";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogListContainer/>
            <DialogArea/>
        </div>
    )
}
export default Dialogs;