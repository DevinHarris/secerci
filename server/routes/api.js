const express = require('express');
const apiRoutes = express.Router();

apiRoutes.route('/api').get((req, res) => {
    res.send({
        message: 'API route!'
    })
})

apiRoutes.route('/api/users').get((req, res) => {
    res.send({
        message: 'All users'
    })
})

apiRoutes.route('/api/users/:id').get((req, res) => {
    res.json({
        user: {
            name: 'Devin Chance',
            username: 'dvnchnc',
            messages: []
        }
    })
})

module.exports = apiRoutes;