const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config({ path: './config.env' });
const PORT = process.env.PORT || 5000;
const apiRoutes = require('./routes/api');

app.use(cors());
app.use(express.json());
app.use(apiRoutes);

mongoose.connect(process.env.mongoDBURI).then(() => {
    console.log('Connected to the database!')
}, err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

