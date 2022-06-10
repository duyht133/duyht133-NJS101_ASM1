const express = require("express");
const router = express.Router();

const checkInCheckOut = require("../controllers/I_Ocontroller")

router.get('/checkIn',checkInCheckOut.Incontroller)

router.get('/CheckOut',checkInCheckOut.Outcontroller)

router.post('/modelCheckIn',checkInCheckOut.modelCheckIncontroller)


module.exports = router;