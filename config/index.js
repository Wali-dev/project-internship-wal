const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/AppError');

const _configs = {
  databasePort: process.env.DATABASE_PORT,
  databaseHost: process.env.DATABASE_HOST,
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,
  // databaseNameEmail: process.env.DATABASE_NAME_EMAIL,
  databaseNameHire: process.env.DATABASE_NAME_HIRE,
  databaseNameTimeSheet: process.env.DATABASE_NAME_TIMESHEET,
  // databaseNameObo: process.env.DATABASE_NAME_OBO,

  jwtSecretKey: process.env.JWT_SECRET_KEY,

  googleSmtpClientId: process.env.GOOGLE_SMTP_CLIENT_ID,
  googleSmtpClientSecret: process.env.GOOGLE_SMTP_CLIENT_SECRET,
  googleSmtpRefreshToken: process.env.GOOGLE_SMTP_REFRESH_TOKEN,
  googleSmtpRedirectUri: process.env.GOOGLE_SMTP_REDIRECT_URI,
};

const config = {
  get(key) {
    if (!_configs[key]) {
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        `${key} is not defined or available in the configs object`
      );
    }
    return _configs[key];
  },
};

module.exports = config;
