const express = require("express");
const router = express.Router();
const SafetyController = require("../controllers/index.controller");

// route to fetch all sample cases
router.get("/sample/cases", SafetyController.getAllSampleCases);

// route to simulate site safety risk
router.post('/sample/simulate', SafetyController.simulateRisk)

module.exports = router;
