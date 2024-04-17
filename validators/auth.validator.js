const { body } = require('express-validator');

const registerValidator = [];

const loginValidator = [
  body('email').isEmail().withMessage('email must be a valid email address'),
  body('password').isString().withMessage('password is required'),
];

module.exports = { registerValidator, loginValidator };
