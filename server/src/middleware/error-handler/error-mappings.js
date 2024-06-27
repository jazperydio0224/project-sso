const { StatusCodes } = require("http-status-codes");

const errorMappings = {
  ER_BAD_FIELD_ERROR: {
    statusCode: StatusCodes.BAD_REQUEST,
    message: "Unknown database table column",
  },
  ER_NO_DEFAULT_FOR_FIELD: {
    statusCode: StatusCodes.BAD_REQUEST,
    message: "Missing field in the row to be inserted",
  },
  ER_NO_REFERENCED_ROW_2: {
    statusCode: StatusCodes.BAD_REQUEST,
    message: "Foreign key does not exist",
  },
  ER_DUP_ENTRY: {
    statusCode: StatusCodes.CONFLICT,
    message: "Duplicate entry is not allowed",
  },
  ER_NO_SUCH_TABLE: {
    statusCode: StatusCodes.NOT_FOUND,
    message: "Database table does not exist",
  },
  default: {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Something went wrong. Please try again later",
  },
};

module.exports = errorMappings;
