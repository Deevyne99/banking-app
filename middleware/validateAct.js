const { check } = require('express-validator')
exports.activate = [
  check('accountId')
    .isInt()
    .withMessage('Account ID should be Integer')
    .not()
    .isEmpty()
    .withMessage('Account ID required'),
]
