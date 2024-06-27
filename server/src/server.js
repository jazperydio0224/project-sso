const http = require("http");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../", ".env") });
// const setupDatabase = require("../config/database.config");

const app = require("./app");

const PORT = process.env.PORT_PROJECT_SS0;
const server = http.createServer(app);

server.on("error", (error) => {
  console.error("Server error:", error);
});

if (!PORT) {
  console.error("PORT environment variable is not defined.");
  process.exit(1);
}

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Promise Rejection:", reason);
});

async function startServer() {
  //   setupDatabase();
  server.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}...`);
  });
}

startServer();
