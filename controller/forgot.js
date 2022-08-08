const userDb = require('../model/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const forgotPassword = async (req, res) => {
  const email = req.body
  const foundUser = userDb.find((user) => {
    return user.email === email
  })
  if (!foundUser) {
    res.status(400).json('User Does not exist')
  }
  const payload = { id: foundUser.userId, email: foundUser.email }
  const token = await jwt.sign(payload, process.env.ACCESS_TOKEN, {
    expiresIn: '15m',
  })
  const link = `http://localhost:3000/reset-forgot-password/${foundUser.userId}/${token}`
  console.log(link)
  res.status(201).json('A link has been sent to your email')
}
