// google auth library
const { OAuth2Client } = require("google-auth-library");

// status codes
const { StatusCodes } = require("http-status-codes");
// errors
const {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  InternalServerError,
  ConflictError,
} = require("../../../errors");

// utils
const { getGoogleUserData } = require("../../../utils/google-auth.util");

// // models
// const { User } = require("@userModelDir/user.model");

// // helpers
// const {
//   comparePassword,
//   generateUserToken,
//   generateCookieOptions,
// } = require("../../helpers/auth.helpers");

// const httpLogin = async (req, res) => {
//   const { email_address, password } = req.body;

//   if (!email_address || !password) {
//     throw new BadRequestError(
//       "Please provide the email address and the password"
//     );
//   }

//   const user = await User.query().where("email_address", email_address).first();

//   if (user && (await comparePassword(password, user.password))) {
//     const cookieName = "ce-maker-auth";
//     const token = generateUserToken(user.id);
//     const cookieOptions = generateCookieOptions();

//     res.cookie(cookieName, token, cookieOptions);
//     return res.status(StatusCodes.OK).json({
//       success: true,
//       message: "User is logged in successfully",
//     });
//   }

//   throw new BadRequestError("Invalid credentials");
// };

// const httpLogout = async (req, res) => {
//   try {
//     // overwrite the current cookie and create a cookie that expires right away
//     // first param -> name of cookie
//     // second param -> token
//     // third param -> cookieOptions
//     res.cookie("ce-maker-auth", "logout token", {
//       // new cookie will expire within 2 seconds
//       expires: new Date(Date.now() + 2 * 1000),
//       httpOnly: true,
//       // sameSite: "none",
//       // secure: true,
//     });

//     return res.status(StatusCodes.OK).json({
//       success: true,
//       message: "User is logged out successfully",
//     });
//   } catch (error) {
//     throw new InternalServerError("User logout has failed. Please try again.");
//   }
// };

const httpCheckAuth = async (req, res) => {
  const { user_id } = req.user;

  if (!req.user || !user_id) {
    throw new UnauthenticatedError("User is not authenticated");
  }

  return res.status(StatusCodes.OK).json({
    success: true,
    message: "User is authenticated",
  });
};

const httpLoginGoogle = async (req, res) => {
  try {
    // since we are using http only, we need to set the referrer policy
    res.header("Referrer-Policy", "no-referrer-when-downgrade");

    const redirectUrl = "http://localhost:7162/project-sso/api/v1/auth/oauth";

    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl
    );

    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline", // for testing purposes - forces a refresh token to be created
      scope: [
        // "https://www.googleapi.com/auth/userinfo.profile",
        "profile",
        "openid",
        "email",
      ],
      prompt: "consent",
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      url: authorizeUrl,
    });
  } catch (err) {
    console.log(err);
    throw new InternalServerError("Google login has failed. Please try again.");
  }
};

const httpLoginGoogleCallback = async (req, res) => {
  const code = req.query.code;

  try {
    const redirectUrl = "http://localhost:7162/project-sso/api/v1/auth/oauth";

    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl
    );

    const { tokens } = await oAuth2Client.getToken(code);
    await oAuth2Client.setCredentials(tokens);
    console.log("Tokens acquired", tokens);

    const user = oAuth2Client.credentials;
    console.log("user", user);

    const googleUserData = await getGoogleUserData(user.access_token);

    return res.status(StatusCodes.OK).json({
      success: true,
      user: googleUserData,
      message: "Google login successful",
    });
  } catch (err) {
    throw new InternalServerError("Google login has failed. Please try again.");
  }
};

const httpLogoutGoogle = async (req, res) => {};

module.exports = {
  // httpLogin,
  // httpLogout,
  httpCheckAuth,
  httpLoginGoogle,
  httpLoginGoogleCallback,
  httpLogoutGoogle,
};
