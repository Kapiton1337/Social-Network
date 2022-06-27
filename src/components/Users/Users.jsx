import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";

let Users = (props) => {
    debugger;
    const users = props.users.map(user => <User name={user.name} avatar={user.avatar} isFollowed={user.isFollowed}
                                                followUser={props.followUser} unfollowUser={props.unfollowUser}
                                                userId={user.id}/>)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (page) => props.setCurrentPage(page)

    return (
        <div>
            <div>
                {pages.map(page => <div className={props.currentPage === page && classes.selectedPage}
                                        onClick={(e) => {
                                            onPageChanged(page)
                                        }}>{page}</div>)}
            </div>
            <div>
                {users}
            </div>
        </div>)
}

export default Users;