const validate = require('../middleware/validateAct')
//const app = require('../app')
const { getAllUsers } = require('../controller/register')
const activateAcct = require('../controller/activate')
const authenticateToken = require('../middleware/Auth')
const getAllAccount = require('../controller/getallAcct')
const deleteAccount = require('../controller/delete')
const deactivateAcct = require('../controller/deactivate')
const creatAdmin = require('../controller/admin')
const Authorization = require('../middleware/isAdmin')
const createStaff = require('../controller/cashier')
const getSingleAccount = require('../controller/acct')
const express = require('express')
const { default: isAdmin } = require('../middleware/isAdmin')
const routerAdmin = express.Router()
const user = require('../model/users')

routerAdmin
  .route('/activate/:accountId')
  .patch(validate.activate, authenticateToken, Authorization, activateAcct)
routerAdmin
  .route('/deactivate/:accountId')
  .patch(validate.activate, deactivateAcct)
routerAdmin.route('/delete/:accountId').delete(validate.activate, deleteAccount)

routerAdmin.route('/accounts').get(authenticateToken, getAllAccount)
routerAdmin.route('/create-admin/:id').patch(authenticateToken, creatAdmin)
routerAdmin.route('/create-cashier/:id').patch(authenticateToken, createStaff)
routerAdmin
  .route('/account/:accountNumber')
  .get(authenticateToken, getSingleAccount)
routerAdmin.route('/account').get(getAllAccount)

routerAdmin.route('/register').get(authenticateToken, getAllUsers)
// router.route('/login').post(validator.createUser, loginUser)

module.exports = routerAdmin
