const Staff = require("../models/staff");

exports.conFirmController = (req, res, next) => {
  Staff.findById(req.body.id)
    .then((data) => {
      const overtime = data.hourWork + parseInt(data.registerAnnualLeave) - 8;
      const salaryMonth = data.salaryScale * 3000000 + (overtime - 8) * 200000;
      console.log(salaryMonth);
      res.render("indexPage/modelConfimTime", {
        prods: data,
        overtime: overtime,
        salaryMonth:salaryMonth,
        pageTitle: "modelConfimTime",
        path: "/modelConfimTime",
      });
    })
    .catch((err) => console.log(err));
};
