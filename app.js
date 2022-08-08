const express = require('express')
require('dotenv').config()
const route = require('./routes/routes')
const staff = require('./routes/staffRoutes')
const admin = require('./routes/adminRoute')
//const Authorization = require('./middleware/isAdmin')

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
port = process.env.PORT || 3000

//middleware

//routes
app.use('/api/v1/banka', route)
//staff role
//app.use(staffAuthorization)
app.use('/api/v1/banka', staff)
//Admin role
//app.use(Authorization)
app.use('/api/v1/banka', admin)
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`)
// })

module.exports = app
