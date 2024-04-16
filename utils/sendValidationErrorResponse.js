const { StatusCodes } = require("http-status-codes");
const AppError = require("./AppError");

const sendValidationErrorResponse = (errors, next) => {
  const errorMessages = errors.array().map((error) => error.msg);
  next(new AppError(StatusCodes.BAD_REQUEST, JSON.stringify(errorMessages)));
};

module.exports = sendValidationErrorResponse;
