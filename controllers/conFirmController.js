const Staff = require("../models/staff");

exports.conFirmController = (req, res, next) => {
  Staff.findById(req.body.id)
    .then((data) => {
      const totalTime = data.hourWork + parseInt(data.registerAnnualLeave) - 8;
      console.log(totalTime);
      res.render("indexPage/modelConfimTime", {
        prods: data,
        date: new Date().toString(),
        totalTime:totalTime,
        pageTitle: "modelConfimTime",
        path: "/modelConfimTime",
      });
    })
    .catch((err) => console.log(err));
};
