var express = require('express');
var router = express.Router();











router.get('/',(req,res,next)=>{
    res.send("Welcome to PhotoBlogger");
});

module.exports = router;