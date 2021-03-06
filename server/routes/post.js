const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requiredLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")


router.get('/allpost',requiredLogin, (req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost', requiredLogin, (req,res)=>{
    const {title,body,price, pic} = req.body
    if(!title || !body || !price || !pic){
        return res,status(422).json({error:"please add all the fields"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        price,
        photo:pic,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.get('/mypost',requiredLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id_name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router