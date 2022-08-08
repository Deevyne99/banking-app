const userDB = require('../model/users')
const { validationResult } = require('express-validator')
const account = require('../model/account')
const CreateAccount = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors })
  }

  const {
    firstName,
    lastName,
    email,
    DOB,
    phoneNumber,
    gender,
    stateOfOrigin,
    city,
    address,
    accountType,
  } = req.body
  const accountNumber = Date.now()
  const date = new Date()
  const status = 'dormant'
  const openingBalance = 0.0
  const accountId = Date.now()
  const foundUser = userDB.find((user) => {
    return user.email === email
  })
  if (foundUser) {
    const findAccount = account.find((acct) => {
      return acct.email === email
    })
    if (findAccount) {
      return res.status(400).json('Account already Exist')
    }
    const newAccount = {
      Id: accountId,
      firstName: firstName,
      lastName,
      lastName,
      email: email,
      accountNumber: accountNumber,
      createdOn: date,
      ownerId: foundUser.userId,
      accountType: accountType,
      status: status,
      phoneNumber: phoneNumber,
      balance: openingBalance,
      DOB: DOB,
      gender: gender,
      StateOfOrigin: stateOfOrigin,
      city: city,
      address: address,
      status: status,
    }
    const data = {
      accountNumber: accountNumber,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      accountType: accountType,
      openingBalance: openingBalance,
      DOB: DOB,
      gender: gender,
      stateOfOrigin: stateOfOrigin,
      city: city,
      address: address,
    }
    account.push(newAccount)
    res.status(201).json({ status: 201, data: data })
  } else {
    return res.status(400).json('Please enter the email You used to register')
  }
}

module.exports = CreateAccount
