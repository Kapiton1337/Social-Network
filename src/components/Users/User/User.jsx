import React from "react";
import classes from "./User.module.css";

const User = (props) => {
    return (
        <div className={classes.user}>
            <div>
                {props.name}
            </div>
            <div>
                <img src={props.avatar}/>
            </div>
            <div>
                {props.isFollowed ? <button onClick={() => props.unfollowUser(props.userId)}>Unfollow</button> :
                    <button onClick={() => props.followUser(props.userId)}>Follow</button>}
            </div>
        </div>
    )
}

export default User;