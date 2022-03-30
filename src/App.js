import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import MessagePage from "./components/MessagePage";
import SignupPage from "./components/SignUpPage";
import SignupSuccess from "./components/SignupSuccess";
import LoginPage from "./components/LoginPage";
import SendPage from "./components/SendPage";
import data from './data.json';

const App = () => {

    const { user } = useSelector(state => state.user)

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={ user.isSignedIn ? <Profile profileData={{ ...user  }} /> : <LandingPage /> } />
                    <Route exact path="/profile" element={<Profile profileData={{...user}} />} />
                    <Route exact path="/join" element={<SignupPage />} />
                    <Route exact path="/thread/:id" element={<MessagePage />} />
                    <Route exact path="/join/success" element={<SignupSuccess />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/new" element={<SendPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;