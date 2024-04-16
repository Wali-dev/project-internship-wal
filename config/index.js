const configs = {
  databasePort: process.env.DATABASE_PORT,
  databaseHost: process.env.DATABASE_HOST,
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,
  // databaseNameEmail: process.env.DATABASE_NAME_EMAIL,
  // databaseNameHire: process.env.DATABASE_NAME_HIRE,
  // databaseNameObo: process.env.DATABASE_NAME_OBO,

  googleSmtpClientId: process.env.GOOGLE_SMTP_CLIENT_ID,
  googleSmtpClientSecret: process.env.GOOGLE_SMTP_CLIENT_SECRET,
  googleSmtpRefreshToken: process.env.GOOGLE_SMTP_REFRESH_TOKEN,
  googleSmtpRedirectUri: process.env.GOOGLE_SMTP_REDIRECT_URI,
};

module.exports = configs;
