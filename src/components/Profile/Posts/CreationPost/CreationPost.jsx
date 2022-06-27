import React from "react";

const CreationPost = (props) => {
    return (<div>
        <textarea value={props.newPostText}
                  onChange={props.addTextArea}/>
        <button onClick={props.addPost}>
            Add Post
        </button>
    </div>);
}
export default CreationPost;