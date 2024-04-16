//const logger = require('./logger');

const sendResponse = (res, statusCode, message, data) => {
  // logger.info(message, {
  //   responseCode: statusCode,
  //   url: res.req.originalUrl,
  //   headers: res.req.headers,
  //   body: res.req.body ? res.req.body : null,
  // });

  let responseObject = {};

  responseObject.success = true;
  responseObject.message = message;

  if (data) responseObject.data = data;

  res.status(statusCode).json(responseObject);
};

module.exports = sendResponse;
