require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

app.use((req, res, next) => {
  const error = new Error("Unvalid URL");
  error.statusCode = 404;
  console.log(`requested url`, req.path);
  next(error);
});
app.use((err, req, res, next) => {
  console.log(err);
  if (err.statusCode) {
    return res.status(err.statusCode).send(err.message);
  } else {
    return res.status(500).send(err.message);
  }
});

module.exports = app;
