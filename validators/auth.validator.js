const { body } = require("express-validator");

const registerValidator = [
  body("firstName").isString().withMessage("FirstName must be a string"),
  body("lastName").isString().withMessage("lastName must be a string"),
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password must be 6 character with number and char mixed"),
  //   body('accountType').isString().withMessage('accountType must be a sting'),
];

const loginValidator = [
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password must be 6 character with number and char mixed"),
];

module.exports = { registerValidator, loginValidator };
