const Staff = require("../models/staff");

exports.contactController = (req, res, next) => {
    console.log(typeof(req.body.image));
    Staff.findById(req.body.id)
    .then((data) => {
        res.render("indexPage/modelContact", {
            prods: data,
            image: data.Image,
            pageTitle: "modelContact",
            path: "/modelContact",
        });
        if(req.body.image !== ""){
            data.Image = req.body.image;
        }
        return data.save();
    })
    .catch((err) => console.log(err));
};
