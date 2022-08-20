const { RedisFunctionFlags } = require("@redis/client/dist/lib/commands/generic-transformers");
const express = require("express");
const client = require("../configs/redis");
const router = express.Router();

const WeatherForecast = require("../models/weather");

router.get("", (req, res) => {
  client.get("weatherForecasts", async (err, forecasts) => {
    console.log("weatherForecasts", forecasts);
    if (err) console.log(err);

    if (forecasts) {
      return res.status(200).send({ Forecasts: JSON.parse(forecasts) });
    }
    const weatherForecasts = await WeatherForecast.find().lean().exec();
    console.log("cache Hit");
    client.set("weatherForecasts", JSON.stringify(weatherForecasts));

    return res.status(200).send({ Forecasts: weatherForecasts });
  });
});

router.post("", async (req, res) => {
  const weatherForecast = await WeatherForecast.create(req.body);

  const weatherForecasts = await WeatherForecast.find().lean().exec();

  client.set("weatherForecasts", JSON.stringify(weatherForecasts));

  return res.status(201).send(weatherForecast);
});

router.get("/:id", (req, res) => {
  client.get(`weatherForecasts.${req.params.id}`, async (err, forecast) => {
    console.log("weatherForecasts", forecast);
    if (err) console.log(err);

    if (forecast) {
      return res.status(200).send({ cachedForecast: JSON.parse(forecast) });
    }

    const weatherForecast = await WeatherForecast.findById(req.params.id).lean().exec();

    client.set(`weatherForecasts.${req.params.id}`,JSON.stringify(weatherForecast));

    return res.status(200).send({ dbForecast: weatherForecast });
  });
});

router.patch("/:id", async (req, res) => {
  const weatherForecast = await WeatherForecast.findByIdAndUpdate(req.params.id, req.body, { new: true });

  client.set(`weatherForecasts.${req.params.id}`, JSON.stringify(weatherForecast));

  const weatherForecasts = await WeatherForecast.find().lean().exec();

  client.set("weatherForecasts", JSON.stringify(weatherForecasts));

  return res.status(201).send(weatherForecasts);
});




module.exports = router;
