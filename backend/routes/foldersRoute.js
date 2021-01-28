const express = require("express")
const router = express.Router();
const folderModel = require('../models/FolderModel')
const majorModel = require('../models/MajorModel')
const auth = require("../authenticateToken")

// get all lists of folders
router.get("/", async (req, res) => {
    const folders = await folderModel.find({}).sort({folderName: 1});
    try {
        res.status(200).send(folders)
    } catch (err) {
        res.status(500).send(err)
    }
})


// get a specific folder by id,showing all notes 
router.get("/:id", async (req, res) => {
    try {
        folderModel.findById({_id: req.params.id})
            .populate("notes")
            .then((folder) => {
                res.status(200).send(folder)
            }).catch((err) => {
                res.status(500).send(err)
            })
    } catch (err){
        res.status(500).send(err)
    }
})

// create a new folder, need auth
router.post('/', auth, async (req, res) => {
    const folder = new folderModel({
        folderName: req.body.folderName,
    })
    const major = req.body.majorName
    try {
        await folder.save(). 
            then((folder) => {
                return majorModel.findOneAndUpdate(
                    {majorName: major}, 
                    { $push: {folders: folder._id}} ,
                    { new: true, useFindAndModify:false }
                ).then((major => {
                    res.satus(200).send(major)
                })).catch((err) => {
                    res.status(500).send(err);
                });
            })
        
    } catch (err) {
        res.status(500).send(err)
    }
})

//delete a folder
router.delete('/:id', async (req, res) => {
    try {
      const folder = await folderModel.findByIdAndDelete(req.params.id)
      if (!folder) res.status(404).send("No folder found")
      res.status(200).send('folder deleted')
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = router;