const mongoose = require('mongoose');
const Schenma = mongoose.Schema;

const MessageSchema = new Schenma({
    conversationId: {
        type: String,
        required: true
    }, 

    time: {
        type: Date
    },

    messages: [
        {
            sender: {
                type: String,
                required: true
            },

            message: {
                type: String,
                required: true
            },

            timestamp: {
                type: Date,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Message', MessageSchema);