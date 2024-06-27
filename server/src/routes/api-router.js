const express = require("express");

const apiRouter = express.Router();

// authentication
const authRouter = require("./auth/auth.route");

// authentication
// apiRouter.use("/auth", authRouter);
apiRouter.use("/auth", authRouter);

module.exports = apiRouter;
