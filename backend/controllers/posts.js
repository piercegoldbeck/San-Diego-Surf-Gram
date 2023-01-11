const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')

function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        res.sendStatus(401)
    }
}

// create route
router.post('/', isAuthenticated, async (req, res) => {
    const newPost = await db.Post.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    newPost.user = decoded.id
    newPost.save()
    res.json(newPost)
})

// index route
router.get('/', async (req, res) => {
    const allPosts = await db.Post.find({}).populate('user')
    res.json(allPosts)
})

// show route
router.get('/:id', async (req, res) => {
    const foundPost = await db.Post.findById(req.params.id).populate('user')
    res.json(foundPost)
})

//update
router.put('/:id', isAuthenticated, async (req, res) => {
    const foundPost = await db.Post.findById(req.params.id)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    if(foundPost.user == decoded.id){
        const updatedPost = await db.Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(updatedPost)
    }
    const updatedPost = await db.Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(updatedPost)
})

//delete
router.delete('/:id', isAuthenticated, async (req, res)=> {
    await db.Post.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router