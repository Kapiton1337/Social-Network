import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavContainer from './components/nav/navContainer';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Videos from "./components/Videos/Videos";
import Music from "./components/Music/Music";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavContainer/>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    <Route path="/friends" element={<FriendsContainer/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/videos" element={<Videos/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
