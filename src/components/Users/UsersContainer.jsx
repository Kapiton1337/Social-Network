import React from "react";
import {connect} from "react-redux";
import {followUserAC, setCurrentPageAC, unfollowUserAC} from "../../redux/reducerUsers";
import Users from "./Users";

const UsersContainer = (props) => {


    return (<Users users={props.users}
                   pageSize={props.pageSize}
                   totalUsersCount={props.totalUsersCount}
                   currentPage={props.currentPage}
                   followUser={props.followUser}
                   unfollowUser={props.unfollowUser}
                   setCurrentPage={props.setCurrentPage}/>)
}

const mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    })
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            followUser: (userId) => {
                dispatch(followUserAC(userId))
            },
            unfollowUser: (userId) => {
                dispatch(unfollowUserAC(userId))
            },
            setCurrentPage: (currentPage) => {
                dispatch(setCurrentPageAC(currentPage))
            }
        }
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



