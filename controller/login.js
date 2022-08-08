const userDB = require('../model/users')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

require('dotenv').config()

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const foundUser = userDB.find((user) => {
    return user.email === email
  })
  if (!foundUser) {
    return res.status(200).json('user does not exist')
  }
  const isMatch = await bcrypt.compare(password, foundUser.password)
  if (isMatch) {
    //const role = foundUser.roles
    const user = {
      email: email,
      userId: foundUser.userId,
      role: foundUser.roles,
    }
    const token = JWT.sign(user, process.env.ACCESS_TOKEN, {
      expiresIn: '1m',
    })
    if (foundUser.roles.type === 'client') {
      const data = {
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
        userId: foundUser.userId,
        token: token,
      }
      return res.status(200).json({ status: 200, data: data })
    } else if (foundUser.roles.type === 'staff') {
      if (foundUser.roles.isAdmin === true) {
        const data = {
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          email: foundUser.email,
          userId: foundUser.UserId,
          token: token,
        }
        return res.status(200).json('Admin route')
      } else {
        const data = {
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          email: foundUser.email,
          userId: foundUser.UserId,
          token: token,
        }
        return res.status(200).json('cashier route')
      }
    }
  } else {
    return res.status(404).json('Invalid Credentials')
  }
}

module.exports = loginUser
