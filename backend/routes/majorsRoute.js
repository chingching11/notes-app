const express = require("express")
const router = express.Router();
const majorModel = require('../models/MajorModel')
const auth = require("../authenticateToken")

// get all lists of majors
router.get("/", async (req, res) => {
    const majors = await majorModel.find({}).sort({majorName: 1});
    try {
        res.status(200).send(majors)
    } catch (err) {
        res.status(500).send(err)
    }
})


// get a specific major by id,showing all folders 
router.get("/:id", async (req, res) => {
    try {
        majorModel.findById({_id: req.params.id})
            .populate( {path:'folders', options: {sort: {'folderName': 'asc'}} })
            .then((major) => {
                res.status(200).send(major)
            }).catch((err) => {
                res.status(500).send(err)
            })
    } catch (err){
        res.status(500).send(err)
    }
})

//create a new major
router.post('/', auth, async (req, res) => {
    const major = new majorModel({
        majorName: req.body.majorName,
        imgUrl: req.body.imgUrl
    })
    try {
        await major.save()
        res.status(200).send(major)
    } catch (err) {
        res.status(500).send(err)
    }
})

//delete a major
router.delete('/:id', async (req, res) => {
    try {
      const major = await majorModel.findByIdAndDelete(req.params.id)
      if (!major) res.status(404).send("No major found")
      res.status(200).send('deleted')
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = router;