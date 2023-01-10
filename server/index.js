// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

// const twilio = require('twilio')
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: "Hello from Twilio",
    from: "+17657197328",
    to: "+12088812229"
  })
  .then((message) => console.log(message.sid))