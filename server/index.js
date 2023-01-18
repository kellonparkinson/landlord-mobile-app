require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

// Functions
const { 
    sendMessage,
    scheduleMessage } = require('./controllers/twilio')

// Endpoints
server.post('/send-sms', sendMessage)
server.post('/schedule-sms', scheduleMessage)

// let date = new Date()
// console.log(date)


server.listen(4000, console.log('Listening on 4000'))