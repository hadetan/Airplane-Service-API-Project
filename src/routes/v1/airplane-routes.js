const express = require('express');

const { AirplaneController } = require('../../controllers');
const { Model } = require('sequelize');
const router = express.Router();

console.log("inside airplane routes");

// /api/v1/airplanes which is a POST request.
router.post('/', AirplaneController.createAirplane);

module.exports = router;