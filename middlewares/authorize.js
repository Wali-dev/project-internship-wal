const catchAsync = require('../utils/catchAsync');
const userService = require('../services/users.service');
const AppError = require('../utils/AppError');
const { StatusCodes } = require('http-status-codes');

const authorize = (accountType) => {
  return async (req, res, next) => {
    try {
      const accountTypes = ['client', 'freelancer', 'tsm'];

      if (!accountTypes.includes(accountType)) {
        throw new AppError(
          StatusCodes.FORBIDDEN,
          'Provide valid accountType parameter while calling authorize function'
        );
      }

      if (req.user.accountType === 'tsm') {
        return next();
      }

      if (accountType.toLowerCase() !== req.user.accountType) {
        throw new AppError(
          StatusCodes.FORBIDDEN,
          'Your profile does not have the required accountType'
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = authorize;
