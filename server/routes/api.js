const express = require('express');
const apiRoutes = express.Router();
const User = require('../models/User');

apiRoutes.get('/api', (req, res) => {
    res.send({
        message: 'API route!'
    })
})

apiRoutes.get('/api/users', (req, res) => {
    User.find().then(users => {
        if (!users) {
            res.send({
                message: 'User not found'
            })
        } else {
            res.json(users)
        }
    }).catch(err => console.log(err));
})

apiRoutes.get('/api/users/:id', (req, res) => {
    const { params } = req;

    User.findOne({ username: params.id }).then(user => {
        if (!user) {
            console.log(`User not found`)
        } else {
            console.log(user);

            res.json(user);
        }
    }).catch(err => console.log(err));

})

module.exports = apiRoutes;