import React from "react";
import classes from './nav.module.css';
import Nav from "./Nav";
import {connect} from "react-redux";

const mapFriendsToProps = (state) => {
    return {friends: state.nav.friends};
}

const NavContainer = connect(mapFriendsToProps)(Nav);

export default NavContainer;