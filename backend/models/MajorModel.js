const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Folder = require('./FolderModel')

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
    folders: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: Folder
        }
    ]
})

MajorSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

const Major = mongoose.model("Major", MajorSchema)
module.exports = Major;