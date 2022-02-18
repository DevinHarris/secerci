const express = require('express');
const authRoutes = express.Router();
const User = require('../models/User');

authRoutes.get('/auth/signup', (req, res) => {
    res.json({
        message: 'User signup'
    })
})

authRoutes.post('/auth/signup', (req, res) => {
    
    const user = new User(req.body);
    user.save().then(() => {
        console.log(user)
    }).catch(err => console.log(err));
    


    console.log(req.body);
    res.send({
        message: 'Front and backend connected!'
    })
})

authRoutes.get('/auth/login', (req, res) => {
    res.json({
        message: 'Login route'
    })
})

module.exports = authRoutes;