const express = require("express");
const router = express.Router();

const conFirm = require("../controllers/conFirmController")

router.post('/modelConfimTime',conFirm.conFirmController)

module.exports = router;