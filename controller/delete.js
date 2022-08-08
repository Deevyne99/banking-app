const useraccounts = require('../model/account')
const { validationResult } = require('express-validator')

const DeleteAccount = async(req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors })
    }
    try {
        
        const accountId = req.params
        const account = useraccounts.filter((account)=>{account.accountId !== Number(accountId)})
        res.status(200).json({status:200,message:'Account successfully deleted'})
    } catch (error) {
        res.status(404).json("account not found")
    }

}

module.exports = DeleteAccount