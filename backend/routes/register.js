const express = require("express")
const router = express.Router();
const Admin = require('../models/AdminModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')


router.post('/', async (req, res) => {
  const {username, password} = req.body
  try{
    await bcrypt.hash(password, saltRounds, (err, hash) => {
      const admin =  new Admin({
        username: username,
        password: hash
      });
      admin.save((err) =>{
        if (err) {
          console.log(err);
          res.status(500).send("Error registering, please try again.");
        } else {
           // Issue token
            const token = jwt.sign({data: username}, process.env.secret, {expiresIn: '1h'});
            console.log('created admin')
            res.status(200).cookie('token', token, { httpOnly: true }).send('token initiated')
        }
      })
    })
  } catch (err) {
      res.status(400).send(err)
  }
    
})
module.exports = router;