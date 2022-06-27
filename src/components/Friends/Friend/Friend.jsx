import React from "react";
import classes from './Friend.module.css'

const Friend = (props) => {
    return(
      <div className={classes.navFriend}>
          <div>
              {props.name}
          </div>
          <div>
              <img src={props.avatar}/>
          </div>
      </div>
    );
}
export default Friend;