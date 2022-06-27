import React from "react";
import classes from "../DialogList.module.css";

const DialogList = (props) => {
    return (
        <div className={classes.DialogList}>
            {props.dialogElements}
        </div>)
}

export default DialogList;