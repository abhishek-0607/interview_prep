const express = require("express");

var peopleController = require("./controllers/peopleController")

var app = express();
app.use(express.json());

app.use("/people", peopleController);





module.exports = app



