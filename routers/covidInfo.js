const express = require("express");
const router = express.Router();

const covidInfo = require("../controllers/covidInfoController")

router.post('/modelCovidInfo',covidInfo.covidInfoController)

module.exports = router;