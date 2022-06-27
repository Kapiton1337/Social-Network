let initialState = {
    posts: [
        {
            name: 'Tony',
            avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
            message: 'Live like me'
        },
        {
            name: 'Tony',
            avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
            message: 'Live like me'
        },
        {
            name: 'Tony',
            avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
            message: 'Live like me'
        },
        {
            name: 'Tony',
            avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
            message: 'Live like me'
        },
        {
            name: 'Tony',
            avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
            message: 'Live like me'
        }
    ],
    newPostText: ''
}
const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case "addPost": {
            return {
                ...state, posts: [...state.posts, {
                    name: 'anon',
                    message: state.newPostText,
                    avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg'
                }], newPostText: ''
            };
            break;
        }
        case "addTextArea": {
            return {...state, newPostText: action.newPostText};
            break;
        }
    }
    return state;
}

export const addTextAreaAction = (text) => {
    return ({type: "addTextArea", newPostText: text});
}
export const addPostAction = () => {
    return ({type: "addPost"})
}

export default reducerProfile;