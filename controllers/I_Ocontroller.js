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
  Staff.findById(req.body.id) // lấy ID từ form người dùng chọn.
    .then((data) => {
      data.employment = req.body.employment; // lấy employments từ form người dùng chọn.
      data.work = true; // set collection work true hiển thị xác nhận bắc đầu.
      data.startTime = new Date();
      data.startDate = new Date();
      return data.save(); // lưu dữ liệu lên server
    })
    .then((data) => {
      // truyền dữ liệu vào modelchekin để hiển thị.
      res.render("indexPage/modelCheckIn", {
        name: data.name,
        employment: data.employment,
        startTime: data.startTime,
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
  Staff.findById(req.body.id) // lấy ID từ form người dùng chọn.
    .then((data) => {
      // truyền dữ liệu vào modelchekin để hiển thị.
      const newStartTime = new Date().getSeconds();
      const hourWork = newStartTime - data.startTime.getSeconds();
      res.render("indexPage/modelCheckOut", {
        name: data.name,
        employment: data.employment,
        TimeEnd: hourWork,
        pageTitle: "modelCheckOut",
        path: "/modelCheckOut",
      });
      data.work = false; // set collection work true hiển thị xác nhận bắc đầu.
      if (newStartTime > data.startTime.getSeconds()) {
        data.hourWork = hourWork;
        data.endTime = new Date();
      }
      return data.save(); // lưu dữ liệu lên server
    })
    .catch((err) => console.log(err));
};

exports.holidaycontroller = (req, res, next) => {
  Staff.find()
    .then((data) => {
      res.render("indexPage/holiday", {
        prods: data,
        pageTitle: "holiday",
        path: "/holiday",
      });
    })
    .catch((err) => console.log(err));
};

exports.modelHolidaycontroller = (req, res, next) => {
  Staff.findById(req.body.id) // lấy ID từ form người dùng chọn.
    .then((data) => {
      const setAnnualLeave = data.annualLeave;
      const datatimeAnnualLeave = req.body.time / 8;
      const totaltimeAnnualLeave = (setAnnualLeave - datatimeAnnualLeave);
      console.log(totaltimeAnnualLeave)
      res.render("indexPage/modelHoliday", {
        annualLeave: data.annualLeave,
        id: req.body.id,
        pageTitle: "modelHoliday",
        path: "/modelHoliday",
      });
      if(req.body.newAnnualLeave == data.annualLeave){
        data.annualLeave = totaltimeAnnualLeave
      }
      data.registerAnnualLeave += parseInt(req.body.time)
      return data.save();
    })
    .catch((err) => console.log(err));
};
