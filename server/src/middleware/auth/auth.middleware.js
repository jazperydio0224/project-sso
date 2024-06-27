const { StatusCodes } = require("http-status-codes");

const { promisify } = require("util");
const jwt = require("jsonwebtoken");

async function userAuth(req, res, next) {
  const cookies = req.cookies["ce-maker-auth"];

  if (!cookies) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "User is not logged in",
    });
  }

  try {
    // verify the token
    const decoded = await promisify(jwt.verify)(
      req.cookies["ce-maker-auth"],
      process.env.LOGIN_SECRET
    );

    req["user"] = decoded;
    return next();
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "User is not logged in",
    });
  }
}

module.exports = {
  userAuth,
};
