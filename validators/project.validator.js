const { body, param } = require('express-validator');

const validateCreateProjects = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  body('status')
    .optional()
    .isIn(['ACTIVE', 'COMPLETED'])
    .withMessage('Invalid status'),
];

const validateGetProjectById = [
  param('projectId').isInt().withMessage('Project ID must be an integer'),
];

const validateUpdateProject = [
  param('projectId').isInt().withMessage('Project ID must be an integer'),
  body('name').optional().notEmpty().withMessage('Name is required'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),
  body('status')
    .optional()
    .isIn(['ACTIVE', 'COMPLETED'])
    .withMessage('Invalid status'),
];

const validateGetProjectsByUserId = [
  param('userId').isInt().withMessage('User ID must be an integer'),
];

module.exports = {
  validateCreateProjects,
  validateGetProjectById,
  validateUpdateProject,
  validateGetProjectsByUserId,
};
