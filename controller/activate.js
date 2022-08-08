const accounts = require('../model/account')
const { validationResult } = require('express-validator')
const activateAcct = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors })
  }

  const { accountId } = req.params
  const status = 'active'
  if (!accountId) {
    res.status(400).json('Account Id required')
  }
  const foundAccount = accounts.find((account) => {
    return account.accountId === Number(accountId)
  })
  if (!foundAccount) {
    return res.status(400).json('Invalid Account Number')
  }
  if (foundAccount.status) {
    foundAccount.status = status
  }
  const data = {
    accountNumber: foundAccount.accountNumber,
    status: foundAccount.status,
  }
  res.status(200).json({ status: 200, data: data })
}
module.exports = activateAcct
