const express = require('express');
const authRoutes = express.Router();

authRoutes.get('/auth/signup', (req, res) => {
    res.json({
        message: 'User signup'
    })
})

authRoutes.get('/auth/login', (req, res) => {
    res.json({
        message: 'Login route'
    })
})

module.exports = authRoutes;