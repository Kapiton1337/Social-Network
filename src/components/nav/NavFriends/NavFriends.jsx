import React from "react";
import classes from "../nav.module.css";
import Friend from "../../Friends/Friend/Friend";
import {NavLink} from "react-router-dom";


const NavFriends = (props) => {
    const friends = props.friends.map(friend=><Friend avatar={friend.avatar} name={friend.name}/>)
    return (
        <div>
            <div>
                <NavLink to="/friends"
                         className={({isActive}) => isActive ? classes.activelink : classes.item}>Friends</NavLink>
            </div>
            <div>
                {friends}
            </div>
        </div>
    );
}
export default NavFriends;