const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const indexRouter = require("./routers/index");
const checkInOutRouter = require("./routers/checkInOut");
const errorController = require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRouter);
app.use(checkInOutRouter);
app.use(errorController.get404);

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.kxxq3.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    app.listen(8000, () => {
      console.log("server running");
    });
  })
  .catch((err) => console.log(err));
