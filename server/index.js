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

// const date = new Date('2023/01/24 09:30').toISOString()

// console.log(date)


server.listen(4000, console.log('Listening on 4000'))