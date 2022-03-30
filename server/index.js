const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/config/.env') });
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
const connectDB = require("./db");

// mongoose.connect(process.env.mongoDBURI).then(() => {
//     console.log('Connected to the database!')
// }, err => console.log(err));

connectDB();


app.use(cors({
    credentials: true,
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(authRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

