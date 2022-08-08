const users = require('../model/users')
const bcrypt = require('bcrypt')

const resetPassword = async (req, res) => {
  const { userid } = req.params
  const { oldPassword, newPassword, confirmPassword } = req.body
  const findUser = users.find((user) => {
    return user.userId === Number(userid)
  })
  if (findUser) {
    const isMatch = await bcrypt.compare(oldPassword, findUser.password)
    if (isMatch) {
      if (findUser.password) {
        const hashnewpassword = await bcrypt.hash(newPassword, 10)
        findUser.password = hashnewpassword
      }

      //const hashconfirmpassword = await bcrypt.hash(confirmPassword, 10)
      const isCorrect = await bcrypt.compare(confirmPassword, findUser.password)

      if (isCorrect) {
        const data = {
          oldPassword: oldPassword,
          newPassword: findUser.password,
          confirmPassword: confirmPassword,
        }
        return res.status(200).json({ status: 200, data: data })
      } else {
        return res.status(200).json('password thoes not match')
      }
    } else {
      return res.status(500).json('invalid passwod')
    }
  } else {
    return res.status(500).json('Invalid User')
  }
}

module.exports = resetPassword
