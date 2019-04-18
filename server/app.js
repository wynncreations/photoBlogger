const dotenv = require('dotenv').config();
const express = require('express');
//const users = require('./routes/users');
const index = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');
const blogs = require("./routes/blogs");


//db connection
var mongoDB = "mongodb+srv://photobloggeradmin:"+process.env.DBPASS+"@cluster0-m3gvu.mongodb.net/PhotoBlogger?retryWrites=true";
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const port = process.env.PORT || 8000

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
//using passport for user authentication
app.use(passport.initialize());
app.use(passport.session());



//Routes
app.use('/', index);
app.use('/blogs', blogs);

//Fire up the server.
app.listen(port, ()=>{
    console.log("Server is now running on port ",port);
});





