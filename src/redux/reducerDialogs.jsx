let initialState = {
    dialogs: [
        {name: 'Tony', id: '/Tony', avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg'},
        {
            name: 'Frank',
            id: '/Frank',
            avatar: 'https://filmexplanations.files.wordpress.com/2016/01/pusher-1996.jpg'
        },
        {
            name: 'Milo',
            id: '/Milo',
            avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/477e31b356614cc6db429b437358615d/100x64_3'
        },
        {
            name: 'Radovan',
            id: '/Radovan',
            avatar: 'https://cdn.smartfacts.ru/426265/slavko-labovic_0.jpg'
        }
    ],
    messagesFromTony: [
        {name: 'Tony', message: 'I ate potato in supermarket.'},
        {name: 'Me', message: 'Yo.'},
        {name: 'Tony', message: 'Yo.'},
        {name: 'Me', message: 'Yo.'}],

    newMessageText: ''
}
const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case "addNewMessage":
            return ({...state, newMessageText: action.newMessageText})
            break;
        case "sendNewMessage":
            return {
                ...state,
                newMessageText: '',
                messagesFromTony: [...state.messagesFromTony, {name: 'Me', message: state.newMessageText}]
            };
            break;
    }
    return state;
};

export const sendNewMessageAction = () => {
    return ({type: "sendNewMessage"});
}

export const addNewMessageAction = (text) => {
    return ({type: "addNewMessage", newMessageText: text})
}

export default reducerDialogs;
