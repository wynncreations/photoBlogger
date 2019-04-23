var express = require('express');
var router = express.Router();
var users = require('../models/users');
var passportLocal = require('passport-local');

router.post('/register', (req,res,next)=>{
    
    var user = new users(req.body.user);

    user.save((err)=>{//save the new user
        if(err){
            res.status(500).send("error saving user ",err);//return error if we cannot save
        }else{

            passportLocal.authenticate((err)=>{//if we saved the new user lets auth them as well right fast.
                if(err){
                    res.redirect('/register?err=',err)//return error if we cannot auth
                }else{

                    res.redirect('/'+req.user);//return to homepage with user in the url(more for debugging)
                }
            });
            
        }
    });



});









router.get('/',(req,res,next)=>{
    res.send("Welcome to users");
});

module.exports = router;