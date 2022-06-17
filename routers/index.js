const express = require("express");
const router = express.Router();

const index = require("../controllers/indexController")

router.get('/',index.indexController)

router.get('/IndexI_O',index.CheckI_OController)

router.get('/conTactIndex',index.indexcontactController)

router.get('/conFirm',index.conFirm)

router.get('/covidInfo',index.covidInfoController)


module.exports = router;