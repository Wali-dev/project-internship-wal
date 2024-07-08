const { body, param } = require('express-validator');

exports.validateCreateTask = [
  body('task').notEmpty().withMessage('task is required'),
  body('subTask')
    .optional()
    .isString()
    .withMessage('subTask must be a string'),
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
  body('freelancers')
    .optional()
    .isArray()
    .withMessage('Freelancers name should be array of objects'),
  body('date')
    .notEmpty()
    .isString(),
  body('time')
    .notEmpty()
    .isString(),
  param('projectId').isString().withMessage('Project ID must be an String'),
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
  param('projectId').isString().withMessage('Project ID must be an String'),
];
