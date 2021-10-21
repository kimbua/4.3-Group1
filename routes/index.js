var express = require("express");
var router = express.Router();

// GET home page.
router.get("/", function (req, res, next) {
  res.send("Welcome to your Simple CRUD API that actually works");
});

// GET student route
// url: /api/student
const studentApi = require("./student.api");
router.use("/student", studentApi);

module.exports = router;
