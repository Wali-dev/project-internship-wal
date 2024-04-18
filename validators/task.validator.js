const { body, param } = require('express-validator');

exports.validateCreateTask = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  body('status')
    .notEmpty()
    .isIn(['TODO', 'INPROGRESS', 'COMPLETED'])
    .withMessage(
      'Status is required and must be one of TODO, INPROGRESS, COMPLETED'
    ),
  param('projectId').isInt().withMessage('Project ID must be an integer'),
];

exports.validateUpdateTask = [
  param('id').isInt().withMessage('Task ID must be an integer'),
  body('title').optional().notEmpty().withMessage('Title is required'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  body('status')
    .notEmpty()
    .isIn(['TODO', 'INPROGRESS', 'COMPLETED'])
    .withMessage(
      'Status is required and must be one of TODO, INPROGRESS, COMPLETED'
    ),
];

exports.validateGetTaskById = [
  param('id').isInt().withMessage('Task ID must be an integer'),
];
exports.validateDeleteTaskById = [
  param('id').isInt().withMessage('Task ID must be an integer'),
];

exports.validateGetTasksByProjectId = [
  param('projectId').isInt().withMessage('Project ID must be an integer'),
];
