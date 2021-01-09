const express = require("express")
const router = express.Router();
const majorModel = require('../models/MajorModel')

// get all lists of majors
router.get("/", async (req, res) => {
    const majors = await majorModel.find({});
    try {
        res.send(majors)
    } catch (err) {
        res.status(500).send(err)
    }
})


// get a specific major by id,showing all notes 
router.get("/:id", async (req, res) => {
    try {
        majorModel.findById({_id: req.params.id})
            .populate("notes")
            .then((major) => {
                res.send(major)
            }).catch((err) => {
                res.status(404).send(err)
            })
    } catch (err){
        res.status(500).send(err)
    }
})

//create a new major
router.post('/', async (req, res) => {
    const major = new majorModel({
        majorName: req.body.majorName
    })
    try {
        await major.save()
        res.send(major)
    } catch (err) {
        res.status(500).send(err)
    }
})

//delete a major
router.delete('/:id', async (req, res) => {
    try {
      const major = await majorModel.findByIdAndDelete(req.params.id)
  
      if (!major) res.status(404).send("No major found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = router;