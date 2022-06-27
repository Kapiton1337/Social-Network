import {combineReducers, createStore} from "redux";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerNav from "./reducerNav";
import reducerUsers from "./reducerUsers";

let reducers = combineReducers(
    {
        dialogPage: reducerDialogs,
        profilePage: reducerProfile,
        nav: reducerNav,
        usersPage: reducerUsers
    });

let store = createStore(reducers);

export default store;