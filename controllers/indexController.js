const Staff = require("../models/staff");

exports.indexController = (req, res, next) => {
  res.render("indexPage/index", {
    pageTitle: "Index",
    path: "/",
  });
};

//////////
exports.CheckI_OController = (req, res, next) => {
  res.render("indexPage/IndexI_O", {
    prods: Staff,
    pageTitle: "IndexI_O",
    path: "/IndexI_O",
  });
};

exports.indexcontactController = (req, res, next) => {
  Staff.find()
  .then((data) => {
    res.render("indexPage/conTactIndex", {
      prods: data,
      pageTitle: "conTactIndex",
      path: "/conTactIndex",
    });
  })
  .catch((err) => console.log(err));
};

exports.conFirm = (req, res, next) => {
  Staff.find()
  .then((data) => {
    res.render("indexPage/conFirm", {
      prods: data,
      pageTitle: "conFirm",
      path: "/conFirm",
    });
  })
  .catch((err) => console.log(err));
};

exports.covidInfoController = (req, res, next) => {
  Staff.find()
    .then((data) => {
      console.log(data)
      res.render("indexPage/covidInfo", {
        prods: data,
        pageTitle: "covidInfo",
        path: "/covidInfo",
      });
    })
    .catch((err) => console.log(err));
};