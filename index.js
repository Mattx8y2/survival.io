const https = require("https");
const path = require("path");

const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = https.createServer(app);
const io = socketIO(server);

app.use("assets", express.static("assts"));

app.get("/", function(request, response) {
  response.status(200);
  repsonse.sendFile(path.join(__dirname, "/core/index.html");
});

server.listen(443);
