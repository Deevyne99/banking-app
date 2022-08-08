const userDb = require('../model/users')

const staff = (req, res, next) => {
  if (userDb.type === 'staff') {
    if (userDb.isAdmin === false) {
      return next()
    } else {
      res.status(401).json('You are cannot enter')
    }
  } else {
    res.status(401).json('You are not authorized')
  }
}
module.exports = staff
