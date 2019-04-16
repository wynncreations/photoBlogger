const dotenv = require('dotenv').config();
const express = require('express');
const users = require('./routes/users');
const index = require('./routes/index');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');

const port = process.env.PORT || 8000

//Routes
app.use('/', index);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.set("trust proxy", 1);
app.use(
    session({
        secret: "photoblogger",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false
        }
    })
);





//Fire up the server.
app.listen(port, ()=>{
    console.log("Server is now running on port ",port);
});





