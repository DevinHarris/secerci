const mongoose = require('mongoose');
const { mongoDBURI } = process.env;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDBURI, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        })

        console.log('Successfully connected to database!')
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;