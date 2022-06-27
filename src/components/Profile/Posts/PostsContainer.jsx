import React from "react";
import Posts from "./Posts";
import {addPostAction, addTextAreaAction} from "../../../redux/reducerProfile";
import {connect} from "react-redux";
import Post from "./Post/Post";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts.map(post=><Post name={post.name} avatar={post.avatar} message={post.message} />)
    }
}

const   mapDispatchToProps = (dispatch) => {
    return (
        {
            addTextArea: (e) => {
                return dispatch(addTextAreaAction(e.target.value))
            },
            addPost: () => {
                return dispatch(addPostAction())
            }
        }
    )
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;