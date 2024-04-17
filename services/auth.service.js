const { StatusCodes } = require('http-status-codes');
const hireDatabase = require('../config/mysql');
const AppError = require('../utils/AppError');
const bcrypt = require('bcrypt');
const signJwt = require('../utils/signJwt');

module.exports.login = async (email, password) => {
  try {
    const [[user]] = await hireDatabase.query(
      `SELECT * FROM users where email = ?`,
      [email]
    );

    if (!user) {
      throw new AppError(
        StatusCodes.NOT_FOUND,
        'No user found with the given email'
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'Your email or password is incorrect'
      );
    }

    const payload = {
      id: user.id,
      accountType: user.accountType,
      email: user.email,
    };

    return {
      ...payload,
      token: signJwt(payload),
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
