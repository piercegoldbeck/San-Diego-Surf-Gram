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


//signup create route
router.post('/', async (req, res) => {
    // console.log(req.body)
    const foundUser = await db.User.findOne({ username: req.body.username})
    // console.log(foundUser)
    if(!foundUser){
        const createdUser = await db.User.create(req.body)
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: createdUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    }
})

//login route
router.post('/login', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    // console.log(foundUser)
    if(req.body.password === foundUser.password){
        const payload = {id: foundUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        const userChat = await db.Chat.find({ user: foundUser._id })
        const userPost = await db.Post.find({ user: foundUser._id })
        res.json({
            user: foundUser,
            token: token,
            chat: userChat,
            post: userPost
        })
    } else {
        res.sendStatus(401)
    }
})

// token show
router.get('/token', isAuthenticated, async (req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decoded.id)
    const userChat = await db.Chat.find({ user: foundUser._id })
    const userPost = await db.Post.find({ user: foundUser._id })
    res.json({
        user: foundUser,
        chat: userChat,
        post: userPost
    })
})

// index 
router.get('/', async (req, res) => {
    const allUsers = await db.User.find({})
    res.json(allUsers)
})

// show
router.get('/:id', async (req, res)=> {
    const foundUser = await db.User.findById(req.params.id)
    const userChat = await db.Chat.find({ user: foundUser._id })
    const userPost = await db.Post.find({ user: foundUser._id })
    res.json({
        user: foundUser,
        chat: userChat,
        post: userPost
    })
})


//update
router.put('/:id', isAuthenticated, async (req, res) => {
    const updatedUser = await db.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.json(updatedUser)
})

//delete
router.delete('/:id', isAuthenticated, async (req, res)=> {
    await db.Chat.deleteMany({ user: req.params.id})
    await db.Post.deleteMany({ user: req.params.id})
    await db.User.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router