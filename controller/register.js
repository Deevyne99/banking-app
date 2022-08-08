const { validationResult } = require('express-validator')
const userDB = require('../model/users')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
require('dotenv').config()

const registerUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors })
  }

  const { firstName, lastName, email, password } = req.body
  const foundUser = userDB.find((user) => {
    return user.email === email
  })

  if (foundUser) {
    return res.status(404).json('Emial Already in use')
  }
  let hashpassowrd = await bcrypt.hash(password, 10)
  const userId = Date.now()
  const type = 'client'
  //const isAdmin = true
  const token = JWT.sign({ email: email }, process.env.ACCESS_TOKEN, {
    expiresIn: '1d',
  })
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashpassowrd,
    userId: userId,
    roles: { type: 'client' },
  }
  data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    userId: userId,
    token: token,
  }
  userDB.push(newUser)
  res.status(200).json({ status: 200, data: newUser })
}

const getAllUsers = async (req, res) => {
  res.status(200).json(userDB)
}

module.exports = { registerUser, getAllUsers }
