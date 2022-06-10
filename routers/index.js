const express = require("express");
const router = express.Router();

const index = require("../controllers/indexController")

router.get('/',index.indexController)

router.get('/findtimeandsalary',index.findtimeandsalaryController)

router.get('/contact',index.contactController)

router.get('/conFirm',index.conFirm)

router.get('/comfirmTime',index.comfirmTimeController)

router.get('/covidInfo',index.covidInfoController)

/* router.get('/addStaff',index.staffController)

router.get('/addStaff',index.staffAddController) */



module.exports = router;