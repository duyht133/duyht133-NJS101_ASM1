const express = require("express");
const router = express.Router();

const checkInCheckOut = require("../controllers/I_Ocontroller")

router.get('/checkIn',checkInCheckOut.Incontroller)
router.post('/modelCheckIn',checkInCheckOut.modelCheckIncontroller)

router.get('/CheckOut',checkInCheckOut.Outcontroller)
router.post('/modelCheckOut',checkInCheckOut.modelCheckOutcontroller)

router.get('/holiday',checkInCheckOut.holidaycontroller)




module.exports = router;