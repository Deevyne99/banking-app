const accounts = require('../model/account')

const getSingleAccount = async (req, res) => {
  const { accountNumber } = req.params
  const foundUser = accounts.find((account) => {
    return account.accountNumber === Number(accountNumber)
  })
  if (foundUser) {
    const data = {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
      accoutType: foundUser.accountType,
      accountNumber: accountNumber,
    }
    res.status(200).json({ status: 201, data: data })
  } else {
    res.status(500).json({ status: 500, message: 'Invalid Account number' })
  }
}

module.exports = getSingleAccount
