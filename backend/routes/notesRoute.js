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

// update a note
router.patch('/:id', (req, res) => {
    
})

// create a new note
router.post('/', auth, async (req, res) => {
    const note = new noteModel({
        noteName: req.body.noteName,
        noteDetail: req.body.noteDetail,
        createdAt: Date.now()
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

//delete a note
router.delete('/:id', async (req, res) => {
    try {
        const note = await noteModel.findByIdAndDelete(req.params.id)
        if (!note) {
            res.status(404).send("No note found")
        }
        res.status(200).send()
      } catch (err) {
        res.status(500).send(err)
      }
})

module.exports = router;