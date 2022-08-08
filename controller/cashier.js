const users = require('../model/users')

const createAdmin = async (req, res) => {
  const { id } = req.params
  const admin = false
  const type = 'staff'
  const foundUser = users.find((user) => {
    return user.userId === Number(id)
  })
  if (foundUser) {
    if (foundUser.type === 'client') {
      foundUser.isAdmin = admin
      foundUser.type = type
      const data = {
        email: foundUser.email,
        type: foundUser.type,
        isAdmin: foundUser.isAdmin,
      }
      return res.status(200).json({ status: 200, data: data })
    } else {
      return res.json('user is a staff')
    }
  } else {
    return res.json('user not found')
  }
}
module.exports = createAdmin
