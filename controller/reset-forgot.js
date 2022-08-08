const userDb = require('../model/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const ResetForgot = async (req, res) => {
  const { id, token } = req.params
  const foundUser = userDb.find((user) => {
    return user.userId === Number(id)
  })
  if (!foundUser) {
    res.status(400).json('Invalid ID')
  }
  try {
    const verify = jwt.verify(token, process.env.ACCESS_TOKEN)
    res.status(200).json('200')
  } catch (error) {
    res.status(404).json('Invalid Token')
  }
}
module.exports = ResetForgot
