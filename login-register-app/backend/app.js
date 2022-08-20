const express = require("express");
const cors = require("cors");
const userController = require("./controllers/userController");
const weatherController = require("./controllers/weatherController");

const app = express();
app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

//Routes
app.use("", userController);
app.use("/weatherForecasts", weatherController);

module.exports = app;
