//const userDb = require('../model/users')
// const Authorize = (req, res, next) => {
//   if (userDb.type === 'client') {
//     return next()
//   } else {
//     res.send('You are a client')
//   }
// }

//
const authRole = (req, res, next) => {
  const isAdmin = true
  if (isAdmin) {
    return next()
  } else {
    return res.status(401).json('Access Denied')
  }
}
module.exports = authRole
