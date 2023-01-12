require('dotenv').config()
const twilio = require('twilio')
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
            // .catch((err) => {
            //     console.log(err)
            //     res.status(400).send('Error with twilio')
            // })
    },
}