const express = require("express")
const router = express.Router();
const noteModel = require('../models/NoteModel')
const majorModel = require('../models/MajorModel')
const auth = require("../authenticateToken")

// get all notes
router.get('/', async (req, res) => {
    const notes = await noteModel.find({});
    try {
        res.send(notes)
    } catch (err) {
        res.status(500).send(err)
    }
})

// get a specific note
router.get('/:id', (req,res) => {
    try {
        noteModel.findById({_id: req.params.id})
            .populate("notes")
            .then((major) => {
                res.send(major)
            }).catch((err) => {
                res.send(err)
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
    const major = req.body.majorName
    try {
        await note.save(). 
            then((note) => {
                return majorModel.findOneAndUpdate(
                    {majorName: major}, 
                    { $push: {notes: note._id}} ,
                    { new: true, useFindAndModify:false }
                ).then((major => {
                    res.send(major)
                })).catch((err) => {
                    res.json(err);
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