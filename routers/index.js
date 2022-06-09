const express = require("express");
const router = express.Router();

const index = require("../controllers/indexController")

router.get('/',index.indexController)

router.get('/findtimeandsalary',index.findtimeandsalaryController)

router.get('/contact',index.contactController)

router.get('/checkInandOut',index.checkInandOutController)

router.get('/comfirmTime',index.comfirmalController)

router.get('/covidInfo',index.covidInfoController)

router.get('/addStaff',index.staffController)

router.get('/addStaff',index.staffAddController)



module.exports = router;