const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
require('dotenv').config()

mongoose.connect(
    process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//Import routes
const majorsRoute = require('./routes/majorsRoute')
const notesRoute = require('./routes/notesRoute')

//Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// Routes
app.use('/majors', majorsRoute);
app.use('/notes', notesRoute)

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(8000, () => {
    console.log('backend listening on port 8000');
})