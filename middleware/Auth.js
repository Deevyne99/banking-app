const jwt = require('jsonwebtoken')
require('dotenv').config()
//const users = require('../model/users')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) {
    return res.status(401).json('Token expired')
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.status(403)
    }
    req.user = user
    next()
  })
}

module.exports = authenticateToken
