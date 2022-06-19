const Staff = require("../models/staff");

exports.covidInfoController = (req, res, next) => {
  Staff.findById(req.body.id)
    .then((data) => {
      res.render("indexPage/modelCovidInfo", {
        prods: data,
        pageTitle: "modelCovidInfo",
        path: "/modelCovidInfo",
      });
      if(req.body.hypothermia !== ""){
        data.hypothermia = req.body.hypothermia;
      }
      if(req.body.temperature !== ""){
        data.temperature = req.body.temperature;
      }
      if(req.body.vaccine1 !== ""){
        data.vaccine1 = req.body.vaccine1;
      }
      if(req.body.vaccinename1 !== ""){
        data.vaccinename1 = req.body.vaccinename1;
      }
      if(req.body.vaccin2 !== ""){
        data.vaccine2 = req.body.vaccine2;
      }
      if(req.body.vaccinename2 !== ""){
        data.vaccinename2 = req.body.vaccinename2;
      }
      if (req.body.positive == "on") {
        data.positive = true;
      } else {
        data.positive = false;
      }
      return data.save();
    })
    .catch((err) => console.log(err));
};
