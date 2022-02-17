const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    messages: [{
        from: String,
        thread: Array,
        date: Date
    }]
})

export default mongoose.model('User', UserSchema);