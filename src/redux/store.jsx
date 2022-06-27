import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";

const store = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
            dialogs: [
                {name: 'Tony', id: '/Tony', avatar: 'https://2ch.hk/b/src/256123076/16342191766190.png'},
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
                    avatar: 'https://image.tmdb.org/t/p/w300/zUiBgsZQTaSJnNISjMIIfkkohwP.jpg'
                }
            ],
            messagesFromTony: [
                {name: 'Tony', message: 'I ate potato in supermarket.'},
                {name: 'Me', message: 'Yo.'},
                {name: 'Tony', message: 'Yo.'},
                {name: 'Me', message: 'Yo.'}],

            newMessageText: '',
        },
        nav: {
            friends: [
                {avatar: 'https://2ch.hk/b/src/256123076/16342191766190.png', name: 'Tony'},
                {avatar: 'https://filmexplanations.files.wordpress.com/2016/01/pusher-1996.jpg', name: 'Frank'},
                {
                    avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/34144/477e31b356614cc6db429b437358615d/100x64_3',
                    name: 'Milo'
                },
                {avatar: 'https://image.tmdb.org/t/p/w300/zUiBgsZQTaSJnNISjMIIfkkohwP.jpg', name: 'Radovan'}
            ]
        },
        usersPage: {
            users: [{
                name: 'Tony1',
                avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
                isFollowed: false,
                id: 1
            }, {
                name: 'Tony2',
                avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
                isFollowed: false,
                id: 2
            }, {
                name: 'Tony3',
                avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
                isFollowed: false,
                id: 3
            }, {
                name: 'Tony2',
                avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
                isFollowed: false,
                id: 4
            }]
        }
    },


    _renderInState() {

    }
    ,

    getState() {
        return this._state;
    }
    ,

    reRender(observer) {
        this._renderInState = observer;
    }
    ,

    dispatch(action) {
        this._state.profilePage = reducerProfile(this._state.profilePage, action);
        this._state.dialogPage = reducerDialogs(this._state.dialogPage, action);

        this._renderInState();
    }
}

/////////////////////////////////////////////////////////////////


export default store;
