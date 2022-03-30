const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    },

    messages: {
        type: Array,
        ref: 'Message' 
    }
    // messages: [{
    //     threads: [
    //         {
    //             id: Number,
    //             from: {
    //                 name: String,
    //                 username: String,
    //                 date: Date
    //             },
    //             messages: Array
    //         }
    //     ]
    // }]
})

module.exports = mongoose.model('User', UserSchema);