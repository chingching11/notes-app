require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser=require('cookie-parser');

const app = express()


//Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

//MongoDB connection
mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

//Import routes
const majorsRoute = require('./routes/majorsRoute')
const notesRoute = require('./routes/notesRoute')
const register = require('./routes/register')
const authRoute = require('./routes/authRoute')
const verifyRoute = require('./routes/verifyAdminRoute')


// Routes
app.use('/majors', majorsRoute);
app.use('/notes', notesRoute)
app.use('/register', register)
app.use('/auth', authRoute)
app.use('/verify', verifyRoute)


app.listen(8000, () => {
    console.log('backend listening on port 8000');
})