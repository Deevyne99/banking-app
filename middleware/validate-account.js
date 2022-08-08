const { check } = require('express-validator')
exports.createAccout = [
  check('firstName')
    .isString()
    .withMessage('First Name should be string')
    .not()
    .isEmpty()
    .withMessage('first Name cannot be empty'),
  check('lastName')
    .isString()
    .withMessage('Last Name should be string')
    .not()
    .isEmpty()
    .withMessage('Email cannot be empty'),
  check('email').isEmail().withMessage('provide a valid email'),
  check('address').isString(),
  check('DOB').isString().withMessage('Date of birth should be String'),
  check('stateOfOrigin')
    .isString()
    .withMessage('State of Origin should be string'),
  check('accountType')
    .isIn(['savings', 'current'])
    .isString()
    .withMessage('account type should be String')
    .not()
    .isEmpty()
    .withMessage(' Account type required'),
  check('gender')
    .isIn(['male', 'female'])
    .isString()
    .withMessage('gender should be string')
    .not()
    .isEmpty()
    .withMessage('Gender required'),
  check('phoneNumber')
    .toInt()
    .not()
    .isEmpty()
    .withMessage('Phone Number required'),
  check('openingBalance').optional('').toFloat(),
]
