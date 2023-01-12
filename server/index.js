require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

const { sendMessage } = require('./controllers/twilio')

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBRmwiHQULQpjfWm5fIs8dmxuccI5wfhHE",
//   authDomain: "landlord-messaging-app.firebaseapp.com",
//   projectId: "landlord-messaging-app",
//   storageBucket: "landlord-messaging-app.appspot.com",
//   messagingSenderId: "482099185499",
//   appId: "1:482099185499:web:7a6b0c80bf05d21adbbc7e"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

server.post('/send', sendMessage)


server.listen(4000, console.log('Listening on 4000'))