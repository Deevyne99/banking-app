const { check } = require('express-validator')

exports.contact = [
  check('name')
    .isString()
    .withMessage('Name must be string')
    .not()
    .isEmpty()
    .withMessage('name Should not be empty'),
  check('email')
    .isEmail()
    .withMessage('Invalid Email')
    .not()
    .isEmpty()
    .withMessage('email Should not be empty'),
  check('message')
    .isString()
    .withMessage('Message must be string')
    .not()
    .isEmpty()
    .withMessage('Message should not be empty'),
]
