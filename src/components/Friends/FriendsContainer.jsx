import React from "react";
import Friends from "./Friends";
import Friend from "./Friend/Friend";
import {connect} from "react-redux";

const mapFriendsToProps = (state)=>{
    return {friends: state.nav.friends.map(friend => <Friend avatar={friend.avatar} name={friend.name}/>)}
}
const FriendsContainer = connect(mapFriendsToProps)(Friends);

export default FriendsContainer;