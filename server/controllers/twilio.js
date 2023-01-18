require('dotenv').config()
const twilio = require('twilio')
const schedule = require('node-schedule')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = new twilio(accountSid, authToken)

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
        const date = new Date(2023, 0, 17, 21, 26, 0)

        const job = schedule.scheduleJob(date, () => {
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
        })
    }
}