const { body, param } = require('express-validator');

exports.validateCreateGroup = [
    body('groupName').notEmpty().withMessage('Groupname is required'),
    body('clientId')
        .notEmpty()
        .withMessage('clientId is required')
        .isString()
        .withMessage('clientId must be a string'),
    body('freelancers')
        .notEmpty()
        .withMessage('freelancers are required'),
    body('projectId')
        .isString()
        .withMessage('projectId must be string')
        .notEmpty()
        .withMessage('projectId is required'),
    body('projectName')
        .isString()
        .withMessage('projectName must be string')
        .notEmpty()
        .withMessage('projectName is required')
];


exports.validateGetGroupsByClientId = [
    param('clientId').isString().withMessage('client Id must be an String'),
];

exports.validateGetGroupById = [
    param('id').isInt().withMessage('group id must be an integer'),
];