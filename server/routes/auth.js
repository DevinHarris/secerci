const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const authRoutes = express.Router();
const User = require('../models/User');


authRoutes.post('/auth/signup', async (req, res) => {

    try {

        const { name, username, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).send("Sorry, but this username is taken. If this is your account please log in");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            username,
            password: encryptedPassword
        })

        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.JWT_TOKEN,
            {
                expiresIn: '5h'
            }
        )

        user.token = token;

        res.status(201).json(user)



    } catch(err) {
        console.log(err)
    }

    // const { name, username, password } = req.body;
    
    // const oldUser = await User.findOne({ username })

    // if (!oldUser) {

    //     const encryptedUserPassword = await bcrypt.hash(password, 10);

    //     const user = await User.create({
    //         name,
    //         username,
    //         password: encryptedUserPassword
    //     })

    //     const token = jwt.sign({
    //         user_id: user._id, username
    //     }, process.env.TOKEN_KEY, {
    //         expiresIn: "5h"
    //     })

    //     user.token = token;

    //     res.status(201).json(user)

    //     // user.save().then(() => {
    //     //     console.log(user)
    //     // }).catch(err => console.log(err));
    // } else {
    //     return res.status(409).send('Sorry, but this user already exists.')
    // }
 
})

authRoutes.post('/auth/login', async (req, res) => {

    try {
        const { username, password } = req.body;

    

        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.JWT_TOKEN,
                {
                    expiresIn: '5h'
                }
            )

            user.token = token;

            return res.status(200).json(user);
        }

        return res.status(400).send("Invalid Login")

    } catch(err) {
        console.log(err);
    }

})

module.exports = authRoutes;