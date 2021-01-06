const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    noteName: {
        type: String,
        required: true,
        unique: true
    },
    noteDetail: {
        type: String
    },
    createdAt: {
        type: Date,
    },

})

const Note = mongoose.model("Note", NoteSchema)
module.exports = Note;