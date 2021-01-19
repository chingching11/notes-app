const express = require("express")
const router = express.Router();
const Admin = require('../models/AdminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
  const { username, password } = req.body
  try{
    Admin.findOne({ username: username }, (err, admin) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal error please try again')
      } else {
          if(admin && username === process.env.username){
            bcrypt.compare(password, admin.password, (err, result) => {
              if (err) {
                res.status(500).send('Internal error please try again')
              } else {
                  // Issue token
                  const token = jwt.sign({data: username}, process.env.secret, { expiresIn: '1hr' });
                  res.status(200).cookie('token', token, { httpOnly: true }).send("token initialized")
              }
            })
          } else {
              res.status(401).send('Access Denied, Incorrect Username or Password')
          }
      }
    })
  } catch (err) {
      console.log(err);
      res.status(500).send('Internal error please try again')
  }
  
})

module.exports = router;