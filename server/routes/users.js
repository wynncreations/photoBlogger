var express = require('express');
var router = express.Router();
var users = require('../models/users');
var passport = require('passport');

router.post("/login", passport.authenticate("local",(err)=>{
    //failed auth
    res.redirect('/login?err='+err);
}), function(req, res){
    return req.user;
});

router.post('/register', (req,res,next)=>{
    
    var user = new users({
        username:req.body.username,
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        fullName:req.body.fullName,
        dateCreate:Date.now()
    });

    users.register(user,req.body.password,(err, user)=>{//register the new user.
        if(err){
            console.log(err);
            res.status(500).send("error saving user ",err);//return error if we cannot save
        }else{
            
            passport.authenticate("local",(err)=>{//if we saved the new user lets auth them as well right fast.
                if(err){
                    res.redirect('/register?err=',err)//return error if we cannot auth
                }else{

                    res.redirect('/'+req.user);//return to homepage with user in the url(more for debugging)
                }
            });
            
           console.log(req.body);
        }
    });
});









router.get('/',(req,res,next)=>{
    res.send("Welcome to users");
});

module.exports = router;