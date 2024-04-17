const { validationResult } = require('express-validator');
const { StatusCodes } = require('http-status-codes');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const sendValidationErrorResponse = require('../utils/sendValidationErrorResponse');
const authService = require('../services/auth.service');

module.exports.register = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendValidationErrorResponse(errors, next);
  }

  //   const data = await authService.register(req.body);
  //   console.log('🚀 ~ module.exports.register=catchAsync ~ data:', data);

  //   if (!data) {
  //     throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error while registering user');
  //   }

  sendResponse(res, StatusCodes.CREATED, 'User registered successfully!');
});

module.exports.login = catchAsync(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendValidationErrorResponse(errors, next);
  }

  const data = await authService.login(req.body.email, req.body.password);
  sendResponse(res, StatusCodes.OK, 'Logged in successfully', data);
});
