const express = require("express");
const { createServer } = require("http");
const app = express();
const path = require("path");

const app_port = 75;

app.get("/", (req, res) => {
  res.render(index);
});
const server = app.listen(app_port, () => {
  console.log("App running on port", app_port);
});

const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer,{
  cors: {
    origin: '*'
  }
});
io.on("connection", (socket) => {
  console.log("connected");
});
io.listen(76);
