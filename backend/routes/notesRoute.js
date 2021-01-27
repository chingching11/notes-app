const express = require("express")
const router = express.Router();
const noteModel = require('../models/NoteModel')
const folderModel = require('../models/FolderModel')
const auth = require("../authenticateToken")

// get all notes
router.get('/', async (req, res) => {
    const notes = await noteModel.find({});
    try {
        res.status(200).send(notes)
    } catch (err) {
        res.status(500).send(err)
    }
})

// get a specific note
router.get('/:id', async (req,res) => {
    try {
        noteModel.findById({_id: req.params.id})
            .populate("notes")
            .then((major) => {
                res.status(200).send(major)
            }).catch((err) => {
                res.status(500).send(err)
            })
    } catch (err){
        res.status(500).send(err)
    }
})

// create a new note, need auth
router.post('/', auth, async (req, res) => {
    const note = new noteModel({
        noteName: req.body.noteName,
        noteDetail: req.body.noteDetail,
    })
    const folder = req.body.folderName
    try {
        await note.save(). 
            then((note) => {
                return folderModel.findOneAndUpdate(
                    {folderName: folder}, 
                    { $push: {notes: note._id}} ,
                    { new: true, useFindAndModify:false }
                ).then((folder => {
                    res.status(200).send(folder)
                })).catch((err) => {
                    res.status(500).send(err);
                });
            })
        
    } catch (err) {
        res.status(500).send(err)
    }
})

// update the noteDetail of a note, need auth
router.patch('/:id', auth, async (req, res) => {
    // res.send('update note')
    const noteName = req.body.noteName
    const noteDetail = req.body.noteDetail
    try{
        const note = await noteModel.findByIdAndUpdate(req.params.id, {noteName: noteName, noteDetail: noteDetail})
        if(!note) {
            res.status(404).send("No note found")
        }
        res.status(200).send('updated')
    } catch (err){
        res.status(500).send(err)
    }
})


//delete a note, need auth
router.delete('/:id', auth, async (req, res) => {
    try {
        const note = await noteModel.findByIdAndDelete(req.params.id)
        if (!note) {
            res.status(404).send("No note found")
        }
        res.status(200).send('deleted')
      } catch (err) {
        res.status(500).send(err)
      }
})

module.exports = router;