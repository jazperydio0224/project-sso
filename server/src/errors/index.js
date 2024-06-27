const CustomAPIError = require("./custom-api.error");
const UnauthenticatedError = require("./unauthenticated.error");
const NotFoundError = require("./not-found.error");
const BadRequestError = require("./bad-request.error");
const InternalServerError = require("./internal-server.error");
const ConflictError = require("./conflict.error");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  InternalServerError,
  ConflictError,
};
