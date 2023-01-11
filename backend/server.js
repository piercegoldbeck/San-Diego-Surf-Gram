// dependencies
const express = require('express')
const app = express()
const cors = require('cors')
require('./models')
require('dotenv').config()
const PORT = process.env.PORT

// access controllers
const userCtrl = require('./controllers/users')
const chatCtrl = require('./controllers/chats')
const postCtrl = require('./controllers/posts')


//middleware
// cross origin allowance
app.use(cors())

// parse the body data
app.use(express.urlencoded({extended: true }))
app.use(express.json())
//routes
app.use('/user', userCtrl)
app.use('/chat', chatCtrl)
app.use('/post', postCtrl)

//where the app will be running for server
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})