const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
      console.log('no token')
      res.status(401).send('Access Denied')
    } else {
        jwt.verify(token, process.env.secret, (err, decoded) => {
            if (err) {
                console.log('invalid token')
              res.status(401).send('Access Denied')
            } else {
                req.username = decoded.data
                if(req.username !== process.env.username){
                    console.log('invalid token')
                    res.status(401).send('Access Denied')
                }
                next();
            }
          });       
    }
}

module.exports = authenticate