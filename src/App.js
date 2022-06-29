import React, { Component }  from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css' // tailwind
import GroupPage from './components/GroupPage'
import Register from "./components/Register";
import Login from "./components/Login";
import HomePage from './components/HomePage'
import PageNotFound from './components/PageNotFound'
import ProfilePage from './components/ProfilePage'
import LandingPage from './components/LandingPage'
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

function App() {
    return (
        <div className="bg-gray-900 min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route element={<Register/>} exact path="/register"/>
                    <Route element={<Login/>} exact path="/login"/>
                    <Route element={<GroupPage/>} exact path="/g/:groupId" />
                    <Route element={<ProfilePage/>} exact path="/u/:userId" />
                    <Route element={<HomePage/>} exact path="/dashboard"/>
                    <Route element={<FAQ/>} exact path="/FAQ"/>
                    <Route element={<LandingPage/>} exact path="/"/>
                    <Route exact element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
