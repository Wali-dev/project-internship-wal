//dependencies
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const { StatusCodes } = require('http-status-codes');
const config = require('../config');

/**
 * Middleware for checking user authentication.
 *
 * @function
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next function.
 * @throws {Error} Will throw an Error if authentication fails.
 */
const isAuth = (req, res, next) => {
  // Check if cookie exists
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Check if a token is provided
  if (!token) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authenticated');
  }

  try {
    // Verify and decode the JWT token using the JWT_SECRET_KEY
    const decoded = jwt.verify(token, config.get('jwtSecretKey'));

    // Check if the token is valid and contains decoded information
    if (!decoded) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authenticated');
    }

    // Set the decoded user information in the request object
    req.user = decoded;

    return next();
  } catch (error) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authenticated');
  }
};

module.exports = isAuth;
