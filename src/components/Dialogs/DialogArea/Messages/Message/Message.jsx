import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {

    const name = props.name;
    const id = props.id;
    const message = props.message;

    return (
        <div className={classes.Message}>
            <div className={classes.Name}>
                {name}
            </div>
            <div classname={classes.Body}>
                {message}
            </div>
        </div>
    )
}
export default Message;