const Staff = require("../models/staff");

exports.Incontroller = (req, res, next) => {
  Staff.find()
    .then((data) => {
      res.render("indexPage/checkIn", {
        prods: data,
        pageTitle: "checkIn",
        path: "/checkIn",
      });
    })
    .catch((err) => console.log(err));
};

////// model check in
exports.modelCheckIncontroller = (req, res, next) => {
  Staff.findById(req.body.id)// lấy ID từ form người dùng chọn.
    .then((data) => {
      data.employment = req.body.employment;// lấy employments từ form người dùng chọn.
      data.work = true; // set collection work true hiển thị xác nhận bắc đầu.
      return data.save();
    })
    .then((data) => {
      res.render("indexPage/modelCheckIn", {
        name: data.name,
        employment:data.employment,
        startTime:data.startTime,
        pageTitle: "modelCheckIn",
        path: "/modelCheckIn",
      });
    })
    .catch((err) => console.log(err));
};

exports.Outcontroller = (req, res, next) => {
  Staff.find()
    .then((data) => {
      res.render("indexPage/checkOut", {
        prods: data,
        pageTitle: "checkOut",
        path: "/checkOut",
      });
    })
    .catch((err) => console.log(err));
};
