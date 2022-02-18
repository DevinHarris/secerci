import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import MessagePage from "./components/MessagePage";
import SignupPage from "./components/SignUpPage";
import SignupSuccess from "./components/SignupSuccess";
import data from './data.json';

const App = () => {

    const { user } = useSelector(state => state.user)

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route exact path="/profile" element={<Profile profileData={{...user}} />} />
                    <Route exact path="/join" element={<SignupPage />} />
                    <Route exact path="/message/:id" element={<MessagePage />} />
                    <Route exact path="/join/success" element={<SignupSuccess />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;