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
    messages: [{
        from: String,
        thread: Array,
        date: Date
    }]
})

module.exports = mongoose.model('User', UserSchema);