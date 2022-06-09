const Staff = require("../models/staff");

exports.indexController = (req, res, next) => {
  res.render("indexPage/index", {
    pageTitle: "Index",
    path: "/",
  });
};

//////////
exports.findtimeandsalaryController = (req, res, next) => {
  Staff.find().then((Staff) => {
    res
      .render("indexPage/findtimeandsalary", {
        prods: Staff,
        pageTitle: "findtimeandsalary",
        path: "/findtimeandsalary",
      })
      
  }).catch((err) => console.log(err));;
};

exports.contactController = (req, res, next) => {
  res.render("indexPage/contact", {
    pageTitle: "Contact",
    path: "/contact",
  });
};

exports.checkInandOutController = (req, res, next) => {
  res.render("indexPage/checkInandOut", {
    pageTitle: "checkInandOut",
    path: "/checkInandOut",
  });
};

exports.comfirmalController = (req, res, next) => {
  res.render("indexPage/comfirmTime", {
    pageTitle: "comfirmTime",
    path: "/comfirmTime",
  });
};

exports.covidInfoController = (req, res, next) => {
  res.render("indexPage/covidInfo", {
    pageTitle: "covidInfo",
    path: "/covidInfo",
  });
};

exports.staffController = (req, res, next) => {
  res.render("indexPage/addStaff", {
    pageTitle: "addStaff",
    path: "/addStaff",
  });
};

exports.staffAddController = (req, res, next) => {
  const title = req.body.title;
  const staff = new Staff({
    title: title,
    userId: req.user,
  });
  staff
    .save()
    .then(() => {
      console.log("Created Product");
      res.redirect("/addStaff");
    })
    .catch((err) => {
      console.log(err);
    });
};
