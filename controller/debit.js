const accounts = require('../model/account')
const transaction = require('../model/transaction')
const users = require('../model/users')

const DebitUSer = async (req, res) => {
  const { accountNumber, accountName, amount, cashierId } = req.body
  const findAccount = accounts.find((account) => {
    return account.accountNumber === Number(accountNumber)
  })
  if (findAccount) {
    // const findCashier = users.find((cashier) => {
    //   return cashier.userId === Number(cashierId)
    // })
    // if (!findCashier) {
    //   res.status(500).json('Invaild Id')
    // }
    const creditAmount = parseFloat(amount)
    const oldBalance = findAccount.balance
    const createdOn = new Date()
    const transactionType = 'Withdrawal'
    const transactionId = Date.now()
    if (oldBalance < creditAmount) {
      return res.status(405).json('Insufficient funds')
    }
    const newBalance = oldBalance - creditAmount
    const newTransaction = {
      transactionId: transactionId,
      accountNumber: String(accountNumber),
      amount: creditAmount,
      cashierId: cashierId,
      transactionType: transactionType,
      accountBalance: newBalance,
      createdOn: createdOn,
    }
    data = {
      transactionId: transactionId,
      accountNumber: String(accountNumber),
      amount: creditAmount,
      cashierId: cashierId,
      transactionType: transactionType,
      accountBalance: newBalance,
    }

    return res.status(200).json({ status: 200, data: data })
  } else {
    return res.status(500).json('Account does not exist')
  }
}
module.exports = DebitUSer
