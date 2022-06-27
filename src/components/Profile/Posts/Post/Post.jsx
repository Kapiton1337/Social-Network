import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div>{props.name}</div>
            <img src={props.avatar} />
            <div>{props.message}</div>
        </div>
    );
}
export default Post;