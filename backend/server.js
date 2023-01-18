// // dependencies
const express = require("express");
const app = express()
const cors = require('cors')
require('./models')
require('dotenv').config()
const path = require("path")
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

// access controllers
const userCtrl = require('./controllers/users')
const chatCtrl = require('./controllers/chats')
const postCtrl = require('./controllers/posts')


//middleware
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))
// cross origin allowance
app.use(cors())

// parse the body data
app.use(express.urlencoded({extended: true }))
app.use(express.json())
//routes
app.use('/user', userCtrl)
app.use('/chat', chatCtrl)
app.use('/post', postCtrl)

// any other route not matching the routes above gets routed by React
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});

//where the app will be running for server
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})