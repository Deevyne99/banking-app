const messages = require('../model/contact')
const contactMe = async (req, res) => {
  const { name, email, message } = req.body
  const date = new Date()
  const newMessage = {
    name: name,
    email: email,
    message: message,
    date: date,
  }
  messages.push(newMessage)
  const data = {
    name: name,
    email: email,
    message: message,
  }
  res.status(200).json({ status: 200, data: data })
}
module.exports = contactMe
 