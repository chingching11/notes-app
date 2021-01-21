const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Note = require('./NoteModel')

const MajorSchema = new mongoose.Schema({
    majorName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        uniqueCaseInsensitive: true
    }, 
    imgUrl: {
        type: String
    },
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: Note
        }
    ]
})

MajorSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

const Major = mongoose.model("Major", MajorSchema)
module.exports = Major;