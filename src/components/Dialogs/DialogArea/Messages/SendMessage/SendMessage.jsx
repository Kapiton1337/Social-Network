import React from "react";

const SendMessage = (props) => {
    return (
        <div>
            <textarea onChange={props.writingMessage} value={props.newMessageText}/>
            <button onClick={props.sendMessage}>Send</button>
        </div>
    );
}
export default SendMessage;