const Staff = require("../models/staff");

////// render checkin
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
      return data.save(); // lưu dữ liệu lên server
    })
    .then((data) => { // truyền dữ liệu vào modelchekin để hiển thị.
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


exports.modelCheckOutcontroller = (req, res, next) => {
  Staff.findById(req.body.id)// lấy ID từ form người dùng chọn.
    .then((data) => {
      data.work = false; // set collection work true hiển thị xác nhận bắc đầu.
      return data.save(); // lưu dữ liệu lên server
    })
    .then((data) => { // truyền dữ liệu vào modelchekin để hiển thị.
      const timeEnd = (new Date() - data.startTime) / 60000
      console.log("start",data.startTime.toString())
      console.log("end",new Date().toString())
      res.render("indexPage/modelCheckOut", {
        name: data.name,
        employment:data.employment,
        TimeEnd: timeEnd,
        pageTitle: "modelCheckOut",
        path: "/modelCheckOut",
      });
    })
    .catch((err) => console.log(err));
};

exports.holidaycontroller = (req, res, next) => {
  Staff.find()
    .then((data) => {
      /* console.log(data); */
      res.render("indexPage/holiday", {
        prods: data,
        pageTitle: "holiday",
        path: "/holiday",
      });
    })
    .catch((err) => console.log(err));
};