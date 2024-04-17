const { body, param } = require("express-validator");

exports.validateCreateProject = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("status")
    .optional()
    .isIn(["ACTIVE", "COMPLETED"])
    .withMessage("Invalid status"),
];

exports.validateGetProjectById = [
  param("id").isInt().withMessage("Project ID must be an integer"),
];

exports.validateUpdateProject = [
  param("id").isInt().withMessage("Project ID must be an integer"),
  body("name").optional().notEmpty().withMessage("Name is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("status")
    .optional()
    .isIn(["ACTIVE", "COMPLETED"])
    .withMessage("Invalid status"),
];

exports.validateGetProjectsByUserId = [
  param("id").isInt().withMessage("User ID must be an integer"),
];
