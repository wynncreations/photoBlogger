var express = require('express');
var router = express.Router();
var blogs = require('../models/blogs');




//post route to save a blog submission.
router.post('/',(req,res,next)=>{


});



router.get('/',(req,res,next)=>{

    //lets submit some fake blogs here.
    var blog = new blogs({
        title:'Blog number 1',
        body:'Tex wants one.',
        dateCreated:Date.now(),
        author_id:'00001',
        author_name:'Robert Wynn',
        tags:['photography','texas','fishing'],
        url:'https://www.instagram.com/p/BwM4wPfgNRh/'
    });
    blog.save((err)=>{
        if(err){
            console.log('An error has occurred ', err)
        }
        else{
            console.log('Saved blog post ',blog);
            return res.status(200).send("Created blog "+blog);
        }
    });
});

module.exports = router;