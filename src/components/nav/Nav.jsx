import React from "react";
import classes from "./nav.module.css";
import {NavLink} from "react-router-dom";
import NavFriends from "./NavFriends/NavFriends";

const Nav = (props) => {
    return <nav className={classes.nav}>
        <div>
            <NavLink to="/profile"
                     className={({isActive}) => isActive ? classes.activelink : classes.item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs"
                     className={({isActive}) => isActive ? classes.activelink : classes.item}>Dialogs</NavLink>
        </div>
        <div>
            <NavLink to="/music"
                     className={({isActive}) => isActive ? classes.activelink : classes.item}>Music</NavLink>
        </div>
        <div>
            <NavLink to="/videos"
                     className={({isActive}) => isActive ? classes.activelink : classes.item}>Videos</NavLink>
        </div>
        <div>
            <NavLink to="/users" className={({isActive}) => isActive ? classes.activelink : classes.item}>Users</NavLink>
        </div>
        <div>
            <NavFriends friends={props.friends}/>
        </div>
    </nav>
}
export default Nav;