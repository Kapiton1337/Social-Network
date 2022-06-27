import React from "react";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";

const Messages = (props) => {
    const messages = props.messages.map(message => <Message name={message.name} message={message.message}/>)
    return (
        <div>
            {messages}
            <SendMessage sendMessage={props.sendMessage} writingMessage={props.writingMessage} newMessageText={props.newMessageText}/>
        </div>
    )
}
export default Messages;