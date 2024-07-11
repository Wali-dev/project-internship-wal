const { body } = require('express-validator');

exports.createtimesheetValidator = [
    body("freelancerId")
        .notEmpty().withMessage("Freelancer ID is required")
        .isString().withMessage("Freelancer ID must be a string"),
    body("projectId")
        .notEmpty()
        .isString().withMessage("Project ID must be a string"),
    body("activityId")
        .optional()
        .isString().withMessage("Activity ID must be a string"),
    body("date")
        .optional()
        .isString().withMessage("Date must be a string"),
    body("startTime")
        .optional()
        .isString().withMessage("Start time must be a string"),
    body("endTime")
        .optional()
        .isString().withMessage("End time must be a string"),
    body("duration")
        .optional()
        .isFloat({ min: 0 }).withMessage("Duration must be a positive number"),
    body("note")
        .optional()
        .isString().withMessage("Note must be a string"),
];
