const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Note = require('./NoteModel')

const FolderSchema = new mongoose.Schema({
    folderName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        uniqueCaseInsensitive: true
    }, 
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: Note
        }
    ]
})

FolderSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

const Folder = mongoose.model("Folder", FolderSchema)
module.exports = Folder;