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
router.post('/', async (req, res) => {
    console.log(req.body)
    const newChat = await db.Chat.create(req.body)
    console.log(newChat)
    newChat.save()
    res.json(newChat)
})

// index route
router.get('/', async (req, res) => {
    const allChats = await db.Chat.find({}).populate('user')
    res.json(allChats)
})

// show route
router.get('/:id', async (req, res) => {
    const foundChat = await db.Chat.findById(req.params.chat).populate('user')
    res.json(foundChat)
})

//update
router.put('/:id', isAuthenticated, async (req, res) => {
    const foundChat = await db.Chat.findById(req.params.id)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    if(foundChat.user == decoded.id){
        const updatedChat = await db.Chat.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(updatedChat)
    }
    const newChat = await db.Chat.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(newChat)
})

//delete
router.delete('/:id', async (req, res)=> {
    await db.Chat.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router