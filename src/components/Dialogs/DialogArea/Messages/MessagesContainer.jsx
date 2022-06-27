import React from "react";
import Messages from "./Messages";
import {addNewMessageAction, sendNewMessageAction} from "../../../../redux/reducerDialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messagesFromTony,
        newMessageText: state.dialogPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        sendMessage: () => {
            dispatch(sendNewMessageAction());
        },
        writingMessage: (e) => {
            const body = e.target.value;
            dispatch(addNewMessageAction(body))
        }
    })
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;