const { Schema, model } = require("mongoose");

const weatherSchema = new Schema(
  {
    cityName: { type: String, required: true },
    maxTemp: { type: Number, required: true },

    MinTemp: { type: Number, required: true },
    chancesOfRain: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const WeatherForecast = model("weatherForecast", weatherSchema);
module.exports = WeatherForecast;
