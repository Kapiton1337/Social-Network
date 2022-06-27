import React from "react";
import classes from './Profile.module.css';
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <img
                src='https://fs.tonkosti.ru/sized/c1600x400/3c/ax/c6/no/tu/80/ww/g4/gc/84/ss/cc/3caxc6notu80wwg4gc84ssccs.jpg'/>
            <PersonalInformation/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;