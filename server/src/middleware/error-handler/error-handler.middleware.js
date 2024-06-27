const errorLogger = require("./error-logger");
const errorMappings = require("./error-mappings");

const errorHandler = (err, req, res, next) => {
  errorLogger.error(err.stack);

  let customError = {};
  if (!err.statusCode || !err.message) {
    customError = { ...errorMappings["default"] };
  }

  if (err.statusCode && err.message) {
    customError = {
      ...customError,
      statusCode: err.statusCode,
      message: err.message,
    };
  }

  const errorCode = err?.nativeError?.code;

  if (errorCode in errorMappings) {
    const { statusCode, message } = errorMappings[errorCode];
    customError = { ...customError, statusCode, message };
  }

  return res
    .status(customError.statusCode)
    .json({ success: false, message: customError.message });
};

module.exports = errorHandler;
