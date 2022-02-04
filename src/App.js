import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import data from './data.json';

const App = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/profile" element={<Profile profileData={{...data[0]}} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;