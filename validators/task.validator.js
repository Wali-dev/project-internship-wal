const { body, param } = require("express-validator");

exports.validateCreateTask = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("status")
    .optional()
    .isIn(["TODO", "INPROGRESS", "COMPLETED"])
    .withMessage("Invalid status"),
  body("projectId").isInt().withMessage("Project ID must be an integer"),
];

exports.validateGetTaskById = [
  param("id").isInt().withMessage("Task ID must be an integer"),
];

exports.validateUpdateTask = [
  param("id").isInt().withMessage("Task ID must be an integer"),
  body("title").optional().notEmpty().withMessage("Title is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("status")
    .optional()
    .isIn(["TODO", "INPROGRESS", "COMPLETED"])
    .withMessage("Invalid status"),
];
