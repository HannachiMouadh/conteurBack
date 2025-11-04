const express = require("express");
const router = express.Router();
const { logSensorData, getSensorData } = require("../controllers/sensorController");

// POST /log → add new sensor data
router.get("/log", logSensorData);

// GET /data → fetch last 100 sensor records
router.get("/data", getSensorData);

module.exports = router;

