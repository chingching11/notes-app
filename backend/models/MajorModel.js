const mongoose = require('mongoose')
const Note = require('./NoteModel')

const MajorSchema = new mongoose.Schema({
    majorName: {
        type: String,
        unique: true,
        required: true,  
    }, 
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: Note
        }
    ]
})

const Major = mongoose.model("Major", MajorSchema)
module.exports = Major;