const mongoose = require('mongoose')
const Note = require('./NoteModel')

const MajorSchema = new mongoose.Schema({
    majorName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
        // collation: { locale: 'en', strength: 1 }  
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