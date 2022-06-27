const FOLLOW = "follow";
const UNFOLLOW = "unfollow";
const SET_CURRENT_PAGE = "set_current_page";

const initialState = {
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
        name: 'Tony4',
        avatar: 'https://64.media.tumblr.com/8dbdb9db08a685b07fb6f1254172d503/0708d7b9b5a15adf-e6/s1280x1920/ffb366030f5783368f9857b73dec2ea5750b314a.jpg',
        isFollowed: false,
        id: 4
    }],
    pageSize: 2,
    totalUsersCount: 4,
    currentPage: 1
}

const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return ({
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return ({...u, isFollowed: true})
                    }
                    return u;
                })
            })
        }
        case UNFOLLOW: {
            debugger;
            return ({
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return ({...u, isFollowed: false})
                    }
                    return u;
                })
            })
        }
        case SET_CURRENT_PAGE: {
            return ({
                ...state, currentPage: action.currentPage
            })
        }
    }
    return state;
}

export const followUserAC = (userId) => {
    return ({type: 'follow', userId: userId})
}

export const unfollowUserAC = (userId) => {
    return ({type: 'unfollow', userId: userId})
}

export const setCurrentPageAC = (currentPage) => {
    return ({type: 'set_current_page', currentPage: currentPage})
}

export default reducerUsers;