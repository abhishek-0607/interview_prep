const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connect;
