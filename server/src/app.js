// // Module Aliases
// require("module-alias/register");

const express = require("express");
require("express-async-errors");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const apiRouter = require("./routes/api-router");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  //   max: Infinity, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
  max: 500,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// error handler
const notFoundMiddleware = require("./middleware/not-found/not-found.middleware");
const errorHandlerMiddleware = require("./middleware/error-handler/error-handler.middleware");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://13.229.21.195:7160",
    ],
    credentials: true,
    exposedHeaders: ["Content-Disposition", "Content-Type"],
  })
);

app.use(morgan("combined"));

// Security Package
app.use(helmet());

// Parse JSON bodies (as sent by API clients)
app.use(express.json({ limit: "10mb" }));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ limit: "10mb", extended: false }));

// // Initialize cookie parser so we can setup cookies in our browser
app.use(cookieParser());

// rate limiter
app.use(limiter);

app.use("/project-sso/api/v1", apiRouter);

// error handler
app.use(errorHandlerMiddleware);

// not found
app.use(notFoundMiddleware);

module.exports = app;
