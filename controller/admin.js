const users = require('../model/users')

const createStaff = async (req, res) => {
  const { id } = req.params
  const admin = true
  const foundUser = users.find((user) => {
    return user.userId === Number(id)
  })
  if (foundUser) {
    if (foundUser.type === 'staff') {
      foundUser.isAdmin = admin
      const data = {
        email: foundUser.email,
        type: foundUser.type,
        isAdmin: foundUser.isAdmin,
      }
      return res.status(200).json({ status: 200, data: data })
    } else {
      return res.status(400).json('user is a client')
    }
  } else {
    return res.status(404).json('user not found')
  }
}
module.exports = createStaff
