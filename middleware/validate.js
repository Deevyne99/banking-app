const { check } = require('express-validator')
exports.createUser = [
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
  check('email').isEmail().withMessage('provide a valid email').not().isEmpty(),
  check('password')
    .isString()
    .withMessage('Password should be a string')
    .isLength({ min: 5 })
    .withMessage('password Should be 5 letters atleast')
    .not()
    .isEmpty()
    .withMessage('password required'),
  check('type')
    .isString()
    .customSanitizer('client')
    .withMessage('type should be string')
    .optional()
    .isIn(['client', 'staff']),
  check('isAdmin').isBoolean().optional(),
]
