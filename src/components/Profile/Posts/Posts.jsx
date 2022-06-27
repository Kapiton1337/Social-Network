import React from "react";
import CreationPost from "./CreationPost/CreationPost";
import Post from "./Post/Post";

const Posts = (props) => {

    return (
        <div>
            <div>My Posts</div>
            <CreationPost addTextArea={props.addTextArea} addPost={props.addPost} newPostText={props.newPostText}/>
            {props.posts}
        </div>
    );
}

export default Posts;