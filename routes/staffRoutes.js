const express = require('express')
const creditUser = require('../controller/credit')
const debitUser = require('../controller/debit')
const authenticateToken = require('../middleware/Auth')
const staffAuthorization = require('../middleware/staff')
const route = express.Router()
//const userdb = require('../model/users')

route.route('/credit').post(authenticateToken, staffAuthorization, creditUser)
route.route('/debit').post(debitUser)

module.exports = route
