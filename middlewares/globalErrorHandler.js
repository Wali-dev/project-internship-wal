const { StatusCodes, getReasonPhrase } = require("http-status-codes");

const sendDevErrorResponse = (error, res) => {
  res.status(error.statusCode).json({
    success: error.success,
    message: error.message,
    error: {
      ...error,
      statusCodePhrase: getReasonPhrase(error.statusCode),
      message: error.message,
    },
    stack: error.stack,
  });
};

const sendProdErrorResponse = (error, res) => {
  if (error.isOperational) {
    return res.status(error.statusCode).json({
      success: error.success,
      message: error.message,
      error,
    });
  } else {
    console.error(`ERROR ⛔`, error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
      error,
    });
  }
};

const globalErrorHandler = async (error, req, res, next) => {
  error.statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  error.success = error.success || false;

  // logger.error(error.message, {
  //   responseCode: error.statusCode,
  //   url: req.url,
  //   headers: req.headers,
  // });

  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "development") {
    sendDevErrorResponse(error, res);
  } else if (process.env.NODE_ENV === "production") {
    sendProdErrorResponse(error, res);
  }
};

module.exports = globalErrorHandler;
