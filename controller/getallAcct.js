const accounts = require('../model/account')

const getAllAccount = async (req, res) => {
  res.status(200).json(accounts)
}
module.exports = getAllAccount
