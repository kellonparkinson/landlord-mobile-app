require('dotenv').config()
const twilio = require('twilio')
const schedule = require('node-schedule')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = new twilio(accountSid, authToken)

// Template for sending message
// client.messages
//   .create({
//     body: "Hello from Twilio",
//     from: "+17657197328",
//     to: "+12088812229"
//   })
//   .then((message) => console.log(message.sid))

module.exports = {
    sendMessage: (req, res) => {
        const { body, from, to } = req.body

        client.messages
            .create({
                body,
                from,
                to
            })
            .then((message) => {
                console.log(message.sid)
                res.send('Message sent!')
            })
    },
    scheduleMessage: (req, res) => {
        const { body, from, to } = req.body
        const { selectedDate } = req.body
        const date = new Date()

        client.messages
            .create({
                body,
                from,
                to
            })
            .then((message) => {
                console.log(message.sid)
                res.send('Scheduled message sent successfully!')
            })
    }
}