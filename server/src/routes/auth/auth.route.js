const express = require("express");

const {
  httpLoginGoogle,
  httpLoginGoogleCallback,
  httpLogoutGoogle,
  httpCheckAuth,
} = require("../../api/controllers/auth/auth.controller");

// // use auth middleware
// const { userAuth } = require("../../middleware/auth/auth.middleware");

const authRouter = express.Router();

authRouter.post("/login-google", httpLoginGoogle);

authRouter.get("/oauth", httpLoginGoogleCallback);

authRouter.get("/logout-google", httpLogoutGoogle);

// authRouter.get("/check-auth", userAuth, httpCheckAuth);

module.exports = authRouter;
